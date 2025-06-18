import { FastifyInstance, FastifyPluginOptions } from 'fastify'

export async function mediaRoutes(
  fastify: FastifyInstance,
  options: FastifyPluginOptions
) {
  fastify.get('/', async () => {
    return { message: 'Media routes - TODO: Implement in Phase 1' }
  })
} 