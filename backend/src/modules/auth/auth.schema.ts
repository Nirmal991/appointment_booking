import {z} from 'zod'

export const registerSchema = z.object({
    name: z.string().min(2, "Name must be atleast 2 characters long"),
    email: z.email("Invalid email"),
    password: z.string().min(6, "Password must be atleast 6 characters long")
}).strict()

export const loginSchema = z.object({
    email: z.email("Invalid email"),
    password: z.string().min(6, "Enter valid password")
}).strict()