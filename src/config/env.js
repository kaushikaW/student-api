import dotenv from "dotenv"

// Only load dotenv in local environment
if (process.env.NODE_ENV !== "production" && !process.env.CI) {
  dotenv.config()
}

export const config = {
  port: Number(process.env.PORT) || 3000,
  databaseUrl: process.env.DATABASE_URL
}
