import app from "./app.js"
import dotenv from "dotenv"
import { config } from "./config/env.js"



app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`)
})
