import { z } from "zod"

export const studentIdSchema = z.string().min(5)
