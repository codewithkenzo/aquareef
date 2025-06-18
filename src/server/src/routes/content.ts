import { FastifyInstance, FastifyPluginOptions } from 'fastify'

export async function contentRoutes(
  fastify: FastifyInstance,
  options: FastifyPluginOptions
) {
  fastify.get('/', async () => {
    return { message: 'Content routes - TODO: Implement in Phase 1' }
  })
} 