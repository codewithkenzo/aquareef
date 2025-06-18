import { FastifyInstance, FastifyPluginOptions } from 'fastify'
import { z } from 'zod'

// Validation schemas
const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters')
})

const registerSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  name: z.string().min(2, 'Name must be at least 2 characters'),
  company: z.string().optional()
})

const forgotPasswordSchema = z.object({
  email: z.string().email('Invalid email address')
})

const resetPasswordSchema = z.object({
  token: z.string().min(1, 'Reset token is required'),
  password: z.string().min(8, 'Password must be at least 8 characters')
})

// Types
type LoginRequest = z.infer<typeof loginSchema>
type RegisterRequest = z.infer<typeof registerSchema>
type ForgotPasswordRequest = z.infer<typeof forgotPasswordSchema>
type ResetPasswordRequest = z.infer<typeof resetPasswordSchema>

export async function authRoutes(
  fastify: FastifyInstance,
  options: FastifyPluginOptions
) {
  // Login endpoint
  fastify.post<{ Body: LoginRequest }>('/login', {
    schema: {
      tags: ['Authentication'],
      summary: 'User login',
      description: 'Authenticate user and return JWT token',
      body: {
        type: 'object',
        required: ['email', 'password'],
        properties: {
          email: { type: 'string', format: 'email' },
          password: { type: 'string', minLength: 8 }
        }
      },
      response: {
        200: {
          type: 'object',
          properties: {
            success: { type: 'boolean' },
            token: { type: 'string' },
            user: {
              type: 'object',
              properties: {
                id: { type: 'string' },
                email: { type: 'string' },
                name: { type: 'string' },
                company: { type: 'string' }
              }
            }
          }
        },
        400: {
          type: 'object',
          properties: {
            error: {
              type: 'object',
              properties: {
                message: { type: 'string' },
                code: { type: 'string' }
              }
            }
          }
        }
      }
    }
  }, async (request, reply) => {
    const { email, password } = loginSchema.parse(request.body)
    
    // TODO: Implement actual authentication logic
    // For now, return mock response
    if (email === 'demo@aquareef.ai' && password === 'password123') {
      const token = fastify.jwt.sign({ 
        userId: '1', 
        email,
        role: 'user'
      })
      
      return reply.send({
        success: true,
        token,
        user: {
          id: '1',
          email,
          name: 'Demo User',
          company: 'Aquareef Demo'
        }
      })
    }
    
    return reply.status(401).send({
      error: {
        message: 'Invalid email or password',
        code: 'INVALID_CREDENTIALS'
      }
    })
  })

  // Register endpoint
  fastify.post<{ Body: RegisterRequest }>('/register', {
    schema: {
      tags: ['Authentication'],
      summary: 'User registration',
      description: 'Create new user account',
      body: {
        type: 'object',
        required: ['email', 'password', 'name'],
        properties: {
          email: { type: 'string', format: 'email' },
          password: { type: 'string', minLength: 8 },
          name: { type: 'string', minLength: 2 },
          company: { type: 'string' }
        }
      },
      response: {
        201: {
          type: 'object',
          properties: {
            success: { type: 'boolean' },
            message: { type: 'string' },
            user: {
              type: 'object',
              properties: {
                id: { type: 'string' },
                email: { type: 'string' },
                name: { type: 'string' }
              }
            }
          }
        }
      }
    }
  }, async (request, reply) => {
    const userData = registerSchema.parse(request.body)
    
    // TODO: Implement actual user creation logic
    // For now, return mock response
    return reply.status(201).send({
      success: true,
      message: 'User registered successfully',
      user: {
        id: '2',
        email: userData.email,
        name: userData.name
      }
    })
  })

  // Forgot password endpoint
  fastify.post<{ Body: ForgotPasswordRequest }>('/forgot-password', {
    schema: {
      tags: ['Authentication'],
      summary: 'Forgot password',
      description: 'Send password reset email',
      body: {
        type: 'object',
        required: ['email'],
        properties: {
          email: { type: 'string', format: 'email' }
        }
      },
      response: {
        200: {
          type: 'object',
          properties: {
            success: { type: 'boolean' },
            message: { type: 'string' }
          }
        }
      }
    }
  }, async (request, reply) => {
    const { email } = forgotPasswordSchema.parse(request.body)
    
    // TODO: Implement password reset email logic
    return reply.send({
      success: true,
      message: 'Password reset email sent'
    })
  })

  // Reset password endpoint
  fastify.post<{ Body: ResetPasswordRequest }>('/reset-password', {
    schema: {
      tags: ['Authentication'],
      summary: 'Reset password',
      description: 'Reset user password with token',
      body: {
        type: 'object',
        required: ['token', 'password'],
        properties: {
          token: { type: 'string' },
          password: { type: 'string', minLength: 8 }
        }
      },
      response: {
        200: {
          type: 'object',
          properties: {
            success: { type: 'boolean' },
            message: { type: 'string' }
          }
        }
      }
    }
  }, async (request, reply) => {
    const { token, password } = resetPasswordSchema.parse(request.body)
    
    // TODO: Implement password reset logic
    return reply.send({
      success: true,
      message: 'Password reset successfully'
    })
  })

  // Profile endpoint (protected)
  fastify.get('/profile', {
    preHandler: [fastify.authenticate],
    schema: {
      tags: ['Authentication'],
      summary: 'Get user profile',
      description: 'Get current user profile information',
      security: [{ bearerAuth: [] }],
      response: {
        200: {
          type: 'object',
          properties: {
            user: {
              type: 'object',
              properties: {
                id: { type: 'string' },
                email: { type: 'string' },
                name: { type: 'string' },
                company: { type: 'string' },
                createdAt: { type: 'string' },
                updatedAt: { type: 'string' }
              }
            }
          }
        }
      }
    }
  }, async (request, reply) => {
    // TODO: Get user from database
    return reply.send({
      user: {
        id: '1',
        email: 'demo@aquareef.ai',
        name: 'Demo User',
        company: 'Aquareef Demo',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }
    })
  })
} 