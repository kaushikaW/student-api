import dotenv from "dotenv"

// Choose environment file
const envFile = process.env.NODE_ENV === "production"
  ? ".env.docker"
  : ".env"

dotenv.config({ path: envFile })

export const config = {
  port: process.env.PORT,
  databaseUrl: process.env.DATABASE_URL
}
