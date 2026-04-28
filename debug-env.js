// scripts/debug-env.js

console.log("🔍 Checking APP_CONFIG...\n")

if (!process.env.APP_CONFIG) {
  console.error("❌ APP_CONFIG is NOT set")
  process.exit(1)
}

try {
  const config = JSON.parse(process.env.APP_CONFIG)

  console.log("✅ APP_CONFIG loaded successfully\n")

  console.log("PORT:", config.PORT)
  console.log("POSTGRES_USER:", config.POSTGRES_USER)
  console.log("POSTGRES_DB:", config.POSTGRES_DB)
  console.log("NODE_ENV:", config.NODE_ENV)

  // ⚠️ Mask sensitive values
  console.log("DATABASE_URL:", config.DATABASE_URL ? "✔ exists" : "❌ missing")
  console.log("POSTGRES_PASSWORD:", config.POSTGRES_PASSWORD ? "✔ exists" : "❌ missing")

} catch (err) {
  console.error("❌ Failed to parse APP_CONFIG JSON")
  console.error(err.message)
  process.exit(1)
}
