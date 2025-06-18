import { FastifyInstance, FastifyPluginOptions } from 'fastify'

export async function campaignRoutes(
  fastify: FastifyInstance,
  options: FastifyPluginOptions
) {
  // Get all campaigns
  fastify.get('/', async (request, reply) => {
    return reply.send({
      campaigns: [],
      message: 'Campaigns endpoint - TODO: Implement in Phase 1'
    })
  })

  // Create campaign
  fastify.post('/', async (request, reply) => {
    return reply.send({
      success: true,
      message: 'Campaign creation - TODO: Implement in Phase 1'
    })
  })
} 