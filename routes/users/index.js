import { prisma } from '../../prisma/database.js'

export default async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    const users = prisma.user.findMany()
    return users
  })
}
