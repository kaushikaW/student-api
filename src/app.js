import express from "express"
import studentRoutes from "./routes/student.routes.js"
import { errorMiddleware } from "./middlewares/error.middleware.js"

const app = express()

app.use(express.json())

app.use("/students", studentRoutes)

app.use(errorMiddleware)

export default app
