# Fastify Documentation

## Introduction

Fastify is a fast and low overhead web framework for Node.js. It provides excellent performance, developer experience, and TypeScript support with a rich plugin ecosystem.

## Installation

```bash
npm install fastify
npm install -D @types/node
```

## Basic Setup

### Simple Server
```typescript
import Fastify from 'fastify'

const fastify = Fastify({
  logger: true
})

// Declare a route
fastify.get('/', async (request, reply) => {
  return { hello: 'world' }
})

// Run the server
const start = async () => {
  try {
    await fastify.listen({ port: 3000 })
    console.log('Server listening on http://localhost:3000')
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
```

### TypeScript Setup
```typescript
import Fastify, { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify'

const fastify: FastifyInstance = Fastify({
  logger: {
    level: 'info',
    prettyPrint: process.env.NODE_ENV === 'development'
  }
})

interface IQuerystring {
  username: string
  password: string
}

interface IHeaders {
  'h-Custom': string
}

fastify.get<{
  Querystring: IQuerystring
  Headers: IHeaders
}>('/auth', async (request, reply) => {
  const { username, password } = request.query
  const customHeader = request.headers['h-custom']
  
  return { authenticated: true }
})
```

## Routing

### Basic Routes
```typescript
// GET route
fastify.get('/users', async (request, reply) => {
  return { users: [] }
})

// POST route
fastify.post('/users', async (request, reply) => {
  const user = request.body
  return { created: user }
})

// PUT route
fastify.put('/users/:id', async (request, reply) => {
  const { id } = request.params
  const user = request.body
  return { updated: user, id }
})

// DELETE route
fastify.delete('/users/:id', async (request, reply) => {
  const { id } = request.params
  return { deleted: id }
})
```

### Route Parameters
```typescript
interface IParams {
  id: string
}

interface IBody {
  name: string
  email: string
}

fastify.put<{
  Params: IParams
  Body: IBody
}>('/users/:id', async (request, reply) => {
  const { id } = request.params
  const { name, email } = request.body
  
  return { id, name, email }
})
```

### Route Prefixes
```typescript
// Register routes with prefix
fastify.register(async function (fastify) {
  fastify.get('/info', async (request, reply) => {
    return { info: 'user info' }
  })
}, { prefix: '/users' })

// Results in /users/info
```

## Schema Validation

### JSON Schema
```typescript
const userSchema = {
  type: 'object',
  required: ['name', 'email'],
  properties: {
    name: { type: 'string', minLength: 1 },
    email: { type: 'string', format: 'email' },
    age: { type: 'number', minimum: 0 }
  }
}

fastify.post('/users', {
  schema: {
    body: userSchema,
    response: {
      201: {
        type: 'object',
        properties: {
          id: { type: 'string' },
          name: { type: 'string' },
          email: { type: 'string' }
        }
      }
    }
  }
}, async (request, reply) => {
  const user = request.body
  reply.code(201)
  return { id: '123', ...user }
})
```

### Query Parameters Schema
```typescript
fastify.get('/search', {
  schema: {
    querystring: {
      type: 'object',
      properties: {
        q: { type: 'string' },
        limit: { type: 'number', default: 10 },
        offset: { type: 'number', default: 0 }
      },
      required: ['q']
    }
  }
}, async (request, reply) => {
  const { q, limit, offset } = request.query
  return { query: q, limit, offset }
})
```

### Headers Schema
```typescript
fastify.get('/protected', {
  schema: {
    headers: {
      type: 'object',
      properties: {
        authorization: { type: 'string' }
      },
      required: ['authorization']
    }
  }
}, async (request, reply) => {
  const { authorization } = request.headers
  return { authorized: true }
})
```

## Plugins

### Built-in Plugins
```typescript
// CORS
await fastify.register(import('@fastify/cors'), {
  origin: ['http://localhost:3000'],
  credentials: true
})

// Static files
await fastify.register(import('@fastify/static'), {
  root: path.join(__dirname, 'public'),
  prefix: '/public/'
})

// Multipart (file uploads)
await fastify.register(import('@fastify/multipart'))

// Rate limiting
await fastify.register(import('@fastify/rate-limit'), {
  max: 100,
  timeWindow: '1 minute'
})

// JWT
await fastify.register(import('@fastify/jwt'), {
  secret: 'supersecret'
})
```

### Custom Plugin
```typescript
import fp from 'fastify-plugin'

interface DatabasePluginOptions {
  connectionString: string
}

async function databasePlugin(
  fastify: FastifyInstance,
  options: DatabasePluginOptions
) {
  // Database connection logic
  const db = await connectToDatabase(options.connectionString)
  
  // Decorate fastify instance
  fastify.decorate('db', db)
  
  // Add hooks
  fastify.addHook('onClose', async (instance) => {
    await db.close()
  })
}

export default fp(databasePlugin, {
  name: 'database-plugin'
})

// Usage
await fastify.register(databasePlugin, {
  connectionString: process.env.DATABASE_URL
})
```

## Hooks

### Lifecycle Hooks
```typescript
// Request hooks
fastify.addHook('onRequest', async (request, reply) => {
  console.log('Request received')
})

fastify.addHook('preValidation', async (request, reply) => {
  // Authentication logic
  if (!request.headers.authorization) {
    throw new Error('Missing authorization header')
  }
})

fastify.addHook('preHandler', async (request, reply) => {
  // Pre-processing logic
  request.user = await getUserFromToken(request.headers.authorization)
})

fastify.addHook('onSend', async (request, reply, payload) => {
  // Modify response before sending
  return payload
})

fastify.addHook('onResponse', async (request, reply) => {
  console.log('Response sent')
})

// Error hook
fastify.addHook('onError', async (request, reply, error) => {
  console.error('Error occurred:', error)
})
```

### Application Hooks
```typescript
fastify.addHook('onReady', async () => {
  console.log('Server is ready')
})

fastify.addHook('onClose', async (instance) => {
  console.log('Server is closing')
})
```

## Error Handling

### Custom Error Handler
```typescript
fastify.setErrorHandler(async (error, request, reply) => {
  if (error.validation) {
    reply.status(400).send({
      error: 'Validation Error',
      message: error.message,
      details: error.validation
    })
  } else if (error.statusCode) {
    reply.status(error.statusCode).send({
      error: error.message
    })
  } else {
    reply.status(500).send({
      error: 'Internal Server Error'
    })
  }
})
```

### Custom Errors
```typescript
import createError from '@fastify/error'

const UserNotFoundError = createError('USER_NOT_FOUND', 'User not found', 404)
const ValidationError = createError('VALIDATION_ERROR', 'Validation failed: %s', 400)

fastify.get('/users/:id', async (request, reply) => {
  const { id } = request.params
  
  const user = await findUser(id)
  if (!user) {
    throw new UserNotFoundError()
  }
  
  return user
})
```

## Middleware & Decorators

### Decorators
```typescript
// Decorate request
fastify.decorateRequest('user', null)

// Decorate reply
fastify.decorateReply('sendSuccess', function(data: any) {
  this.send({ success: true, data })
})

// Decorate fastify instance
fastify.decorate('authenticate', async function(request: FastifyRequest) {
  const token = request.headers.authorization?.replace('Bearer ', '')
  if (!token) {
    throw new Error('Missing token')
  }
  
  const user = await verifyToken(token)
  request.user = user
})

// Usage
fastify.get('/profile', {
  preHandler: [fastify.authenticate]
}, async (request, reply) => {
  reply.sendSuccess(request.user)
})
```

### Context Configuration
```typescript
fastify.register(async function (fastify) {
  // This context has its own decorators/hooks
  fastify.decorate('utility', 'specific to this context')
  
  fastify.get('/context-route', async (request, reply) => {
    return { utility: fastify.utility }
  })
})
```

## Database Integration

### With Prisma
```typescript
import { PrismaClient } from '@prisma/client'
import fp from 'fastify-plugin'

async function prismaPlugin(fastify: FastifyInstance) {
  const prisma = new PrismaClient()
  
  await prisma.$connect()
  
  fastify.decorate('prisma', prisma)
  
  fastify.addHook('onClose', async (instance) => {
    await instance.prisma.$disconnect()
  })
}

export default fp(prismaPlugin)

// Usage
await fastify.register(prismaPlugin)

fastify.get('/users', async (request, reply) => {
  const users = await fastify.prisma.user.findMany()
  return { users }
})
```

## Authentication & Authorization

### JWT Authentication
```typescript
await fastify.register(import('@fastify/jwt'), {
  secret: process.env.JWT_SECRET
})

// Authentication decorator
fastify.decorate('authenticate', async function(request: FastifyRequest, reply: FastifyReply) {
  try {
    await request.jwtVerify()
  } catch (err) {
    reply.send(err)
  }
})

// Protected route
fastify.get('/protected', {
  preHandler: [fastify.authenticate]
}, async (request, reply) => {
  return { message: 'Protected resource', user: request.user }
})

// Login route
fastify.post('/login', async (request, reply) => {
  const { username, password } = request.body
  
  // Validate credentials
  const user = await validateUser(username, password)
  if (!user) {
    reply.code(401).send({ error: 'Invalid credentials' })
    return
  }
  
  const token = fastify.jwt.sign({ 
    id: user.id, 
    username: user.username 
  })
  
  return { token }
})
```

## Testing

### Basic Testing
```typescript
import { test } from 'tap'
import { build } from './app'

test('GET / returns correct response', async (t) => {
  const app = build({ logger: false })
  
  const response = await app.inject({
    method: 'GET',
    url: '/'
  })
  
  t.equal(response.statusCode, 200)
  t.same(JSON.parse(response.payload), { hello: 'world' })
})
```

### Testing with Database
```typescript
import { test } from 'tap'
import { build } from './app'

test('POST /users creates user', async (t) => {
  const app = build({ logger: false })
  
  const userData = {
    name: 'John Doe',
    email: 'john@example.com'
  }
  
  const response = await app.inject({
    method: 'POST',
    url: '/users',
    payload: userData
  })
  
  t.equal(response.statusCode, 201)
  const result = JSON.parse(response.payload)
  t.equal(result.name, userData.name)
  t.equal(result.email, userData.email)
  t.ok(result.id)
})
```

## Performance & Production

### Production Configuration
```typescript
const fastify = Fastify({
  logger: {
    level: 'info',
    serializers: {
      req: (req) => ({
        method: req.method,
        url: req.url,
        version: req.headers?.['accept-version'],
        hostname: req.hostname,
        remoteAddress: req.ip,
        remotePort: req.socket?.remotePort
      })
    }
  },
  trustProxy: true,
  bodyLimit: 1048576, // 1MB
  keepAliveTimeout: 5000
})
```

### Health Checks
```typescript
fastify.get('/health', async (request, reply) => {
  // Check database connection
  try {
    await fastify.prisma.$queryRaw`SELECT 1`
    return { status: 'healthy', timestamp: new Date().toISOString() }
  } catch (error) {
    reply.code(503).send({ 
      status: 'unhealthy', 
      error: error.message,
      timestamp: new Date().toISOString()
    })
  }
})
```

### Graceful Shutdown
```typescript
const gracefulShutdown = async (signal: string) => {
  console.log(`Received ${signal}, shutting down gracefully`)
  
  try {
    await fastify.close()
    console.log('Server closed successfully')
    process.exit(0)
  } catch (error) {
    console.error('Error during shutdown:', error)
    process.exit(1)
  }
}

process.on('SIGTERM', () => gracefulShutdown('SIGTERM'))
process.on('SIGINT', () => gracefulShutdown('SIGINT'))
```

## OpenAPI/Swagger Integration

```typescript
await fastify.register(import('@fastify/swagger'), {
  openapi: {
    info: {
      title: 'My API',
      description: 'API documentation',
      version: '1.0.0'
    },
    servers: [
      { url: 'http://localhost:3000', description: 'Development server' }
    ]
  }
})

await fastify.register(import('@fastify/swagger-ui'), {
  routePrefix: '/docs',
  uiConfig: {
    docExpansion: 'full',
    deepLinking: false
  }
})

// Route with OpenAPI schema
fastify.post('/users', {
  schema: {
    description: 'Create a new user',
    tags: ['users'],
    body: {
      type: 'object',
      required: ['name', 'email'],
      properties: {
        name: { type: 'string', description: 'User name' },
        email: { type: 'string', format: 'email', description: 'User email' }
      }
    },
    response: {
      201: {
        description: 'User created successfully',
        type: 'object',
        properties: {
          id: { type: 'string' },
          name: { type: 'string' },
          email: { type: 'string' }
        }
      }
    }
  }
}, async (request, reply) => {
  const user = await createUser(request.body)
  reply.code(201)
  return user
})
```

## Best Practices

1. **Use TypeScript** for better type safety
2. **Implement proper error handling** with custom error handler
3. **Use schema validation** for all routes
4. **Leverage plugins** for reusable functionality
5. **Add proper logging** for debugging and monitoring
6. **Implement health checks** for production deployment
7. **Use decorators** for shared functionality
8. **Test your routes** with inject method
9. **Handle graceful shutdown** properly
10. **Document your API** with OpenAPI/Swagger

Fastify provides excellent performance and developer experience for building modern Node.js APIs with TypeScript support and a rich ecosystem of plugins. 