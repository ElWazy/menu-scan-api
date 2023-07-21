import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main () {
  const elwazy = await prisma.user.upsert({
    where: { email: 'santiago.fierro4@outlook.cl' },
    update: {},
    create: {
      name: 'Santiago Fierro',
      email: 'santiago.fierro4@outlook.cl',
      image: 'https://avatars.githubusercontent.com/u/50506573?v=4'
    }
  })
  console.log({ elwazy })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
