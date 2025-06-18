import Fastify, { FastifyInstance } from 'fastify'
import cors from '@fastify/cors'
import helmet from '@fastify/helmet'
import rateLimit from '@fastify/rate-limit'
import swagger from '@fastify/swagger'
import swaggerUi from '@fastify/swagger-ui'
import jwt from '@fastify/jwt'
import multipart from '@fastify/multipart'
import { config } from './config/environment'
import { errorHandler } from './middleware/error-handler'
import { authRoutes } from './routes/auth'
import { campaignRoutes } from './routes/campaigns'
import { contentRoutes } from './routes/content'
import { analyticsRoutes } from './routes/analytics'
import { mediaRoutes } from './routes/media'

// Create Fastify instance
const fastify: FastifyInstance = Fastify({
  logger: {
    level: config.LOG_LEVEL,
    prettyPrint: config.NODE_ENV === 'development'
  }
})

// Register plugins
async function registerPlugins() {
  // Security plugins
  await fastify.register(helmet, {
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        styleSrc: ["'self'", "'unsafe-inline'"],
        scriptSrc: ["'self'"],
        imgSrc: ["'self'", "data:", "https:"],
      },
    },
  })

  await fastify.register(cors, {
    origin: config.CORS_ORIGINS,
    credentials: true,
  })

  await fastify.register(rateLimit, {
    max: 100,
    timeWindow: '1 minute'
  })

  // JWT authentication
  await fastify.register(jwt, {
    secret: config.JWT_SECRET,
    sign: {
      expiresIn: '24h'
    }
  })

  // File upload support
  await fastify.register(multipart, {
    limits: {
      fileSize: 50 * 1024 * 1024, // 50MB
      files: 10
    }
  })

  // OpenAPI documentation
  await fastify.register(swagger, {
    openapi: {
      openapi: '3.0.0',
      info: {
        title: 'Aquareef API',
        description: 'AI-powered social media automation platform API',
        version: '1.0.0',
        contact: {
          name: 'Aquareef Team',
          email: 'api@aquareef.ai'
        }
      },
      servers: [
        {
          url: config.API_BASE_URL,
          description: 'Aquareef API Server'
        }
      ],
      components: {
        securitySchemes: {
          bearerAuth: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT'
          }
        }
      },
      security: [
        {
          bearerAuth: []
        }
      ],
      tags: [
        { name: 'Authentication', description: 'User authentication endpoints' },
        { name: 'Campaigns', description: 'Campaign management endpoints' },
        { name: 'Content', description: 'Content creation and management' },
        { name: 'Analytics', description: 'Performance analytics and reporting' },
        { name: 'Media', description: 'File upload and media management' }
      ]
    }
  })

  await fastify.register(swaggerUi, {
    routePrefix: '/docs',
    uiConfig: {
      docExpansion: 'list',
      deepLinking: false
    },
    staticCSP: true,
    transformStaticCSP: (header) => header,
    transformSpecification: (swaggerObject) => {
      return swaggerObject
    },
    transformSpecificationClone: true
  })
}

// Register routes
async function registerRoutes() {
  await fastify.register(authRoutes, { prefix: '/api/v1/auth' })
  await fastify.register(campaignRoutes, { prefix: '/api/v1/campaigns' })
  await fastify.register(contentRoutes, { prefix: '/api/v1/content' })
  await fastify.register(analyticsRoutes, { prefix: '/api/v1/analytics' })
  await fastify.register(mediaRoutes, { prefix: '/api/v1/media' })
}

// Health check endpoint
fastify.get('/health', async () => {
  return {
    status: 'healthy',
    timestamp: new Date().toISOString(),
    version: '1.0.0',
    environment: config.NODE_ENV
  }
})

// Root endpoint
fastify.get('/', async () => {
  return {
    message: '🌊 Welcome to Aquareef API',
    version: '1.0.0',
    documentation: '/docs',
    health: '/health'
  }
})

// Initialize server
async function start() {
  try {
    await registerPlugins()
    await registerRoutes()
    
    // Register global error handler
    fastify.setErrorHandler(errorHandler)

    // Start server
    const address = await fastify.listen({
      port: config.PORT,
      host: config.HOST
    })

    fastify.log.info(`🌊 Aquareef API server listening at ${address}`)
    fastify.log.info(`📚 API Documentation available at ${address}/docs`)
  } catch (error) {
    fastify.log.error(error)
    process.exit(1)
  }
}

// Graceful shutdown
process.on('SIGINT', async () => {
  fastify.log.info('Received SIGINT, shutting down gracefully...')
  await fastify.close()
  process.exit(0)
})

process.on('SIGTERM', async () => {
  fastify.log.info('Received SIGTERM, shutting down gracefully...')
  await fastify.close()
  process.exit(0)
})

// Start the server
if (require.main === module) {
  start()
}

export { fastify }
export default fastify 