export default async function (fastify, opts) {
  
  fastify.get('/', async function (request, reply) {
    return { 'message': 'Welcome to Menu Scan API!' }
  })
}
