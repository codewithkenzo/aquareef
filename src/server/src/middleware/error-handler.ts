import { FastifyError, FastifyReply, FastifyRequest } from 'fastify'
import { ZodError } from 'zod'

interface ErrorResponse {
  error: {
    message: string
    code?: string
    details?: any
    timestamp: string
    path: string
  }
}

export async function errorHandler(
  error: FastifyError,
  request: FastifyRequest,
  reply: FastifyReply
): Promise<void> {
  const timestamp = new Date().toISOString()
  const path = request.url

  // Log error for debugging
  request.log.error({
    error: error.message,
    stack: error.stack,
    path,
    method: request.method,
    timestamp
  }, 'Request error')

  // Handle Zod validation errors
  if (error instanceof ZodError) {
    const errorResponse: ErrorResponse = {
      error: {
        message: 'Validation failed',
        code: 'VALIDATION_ERROR',
        details: error.errors.map(err => ({
          field: err.path.join('.'),
          message: err.message,
          code: err.code
        })),
        timestamp,
        path
      }
    }
    
    return reply.status(400).send(errorResponse)
  }

  // Handle JWT errors
  if (error.code === 'FST_JWT_BAD_REQUEST' || error.code === 'FST_JWT_NO_AUTHORIZATION_IN_HEADER') {
    const errorResponse: ErrorResponse = {
      error: {
        message: 'Invalid or missing authentication token',
        code: 'AUTHENTICATION_ERROR',
        timestamp,
        path
      }
    }
    
    return reply.status(401).send(errorResponse)
  }

  // Handle rate limit errors
  if (error.statusCode === 429) {
    const errorResponse: ErrorResponse = {
      error: {
        message: 'Too many requests, please try again later',
        code: 'RATE_LIMIT_EXCEEDED',
        timestamp,
        path
      }
    }
    
    return reply.status(429).send(errorResponse)
  }

  // Handle file upload errors
  if (error.code === 'FST_FILES_LIMIT' || error.code === 'FST_PROTO_VIOLATION') {
    const errorResponse: ErrorResponse = {
      error: {
        message: 'File upload failed - check file size and format',
        code: 'FILE_UPLOAD_ERROR',
        timestamp,
        path
      }
    }
    
    return reply.status(400).send(errorResponse)
  }

  // Handle known HTTP errors
  if (error.statusCode && error.statusCode >= 400 && error.statusCode < 500) {
    const errorResponse: ErrorResponse = {
      error: {
        message: error.message || 'Bad request',
        code: error.code || 'BAD_REQUEST',
        timestamp,
        path
      }
    }
    
    return reply.status(error.statusCode).send(errorResponse)
  }

  // Handle server errors (5xx)
  const errorResponse: ErrorResponse = {
    error: {
      message: 'Internal server error',
      code: 'INTERNAL_SERVER_ERROR',
      timestamp,
      path
    }
  }

  // In development, include error details
  if (process.env['NODE_ENV'] === 'development') {
    errorResponse.error.details = {
      message: error.message,
      stack: error.stack,
      code: error.code
    }
  }

  return reply.status(500).send(errorResponse)
}

// Custom error classes
export class ValidationError extends Error {
  public statusCode = 400
  public code = 'VALIDATION_ERROR'
  
  constructor(message: string, public details?: any) {
    super(message)
    this.name = 'ValidationError'
  }
}

export class AuthenticationError extends Error {
  public statusCode = 401
  public code = 'AUTHENTICATION_ERROR'
  
  constructor(message: string = 'Authentication required') {
    super(message)
    this.name = 'AuthenticationError'
  }
}

export class AuthorizationError extends Error {
  public statusCode = 403
  public code = 'AUTHORIZATION_ERROR'
  
  constructor(message: string = 'Insufficient permissions') {
    super(message)
    this.name = 'AuthorizationError'
  }
}

export class NotFoundError extends Error {
  public statusCode = 404
  public code = 'NOT_FOUND'
  
  constructor(message: string = 'Resource not found') {
    super(message)
    this.name = 'NotFoundError'
  }
}

export class ConflictError extends Error {
  public statusCode = 409
  public code = 'CONFLICT'
  
  constructor(message: string = 'Resource conflict') {
    super(message)
    this.name = 'ConflictError'
  }
} 