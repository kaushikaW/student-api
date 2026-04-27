import pkg from '@prisma/client'
const { PrismaClient } = pkg

const prisma = new PrismaClient()

export const StudentRepository = {
  findById: (id) => {
    return prisma.student.findUnique({
      where: { id }
    })
  }
}
