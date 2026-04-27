import pkg from '@prisma/client'
const { PrismaClient } = pkg

const prisma = new PrismaClient()

async function main() {
  console.log("🌱 Seeding database...")

  await prisma.student.createMany({
    data: [
      {
        id: "991313761V",
        name: "Kasun Perera",
        batchYear: 2020,
        address: "Colombo"
      },
      {
        id: "992223344V",
        name: "Nimal Silva",
        batchYear: 2021,
        address: "Kandy"
      },
      {
        id: "993334455V",
        name: "Amali Fernando",
        batchYear: 2022,
        address: "Galle"
      }
    ]
  })

  console.log("✅ Seeding completed")
}

main()
  .catch((e) => {
    console.error(e)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
