import { FastifyInstance, FastifyPluginOptions } from 'fastify'

export async function analyticsRoutes(
  fastify: FastifyInstance,
  options: FastifyPluginOptions
) {
  fastify.get('/', async () => {
    return { message: 'Analytics routes - TODO: Implement in Phase 1' }
  })
} 