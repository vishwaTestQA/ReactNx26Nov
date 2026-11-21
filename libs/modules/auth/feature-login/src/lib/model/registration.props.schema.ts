import {z} from 'zod'
export const registerSchema = z.object({
   firstname: z.string().min(1, {message: "First name is required"}),
   lastname: z.string().min(1, {message: "Last name is required"}),
   email: z.string().email({message: "Invalid email address"}),
   age: z.number(),
   phone: z.number().min(10, {message: 'phone number should be 10 digits'}).max(10),
   password: z.string().min(6, {message: "Password must be at least 6 characters long"}),
   confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
    message: "password doesn't match",
    path: ['confirmPassword'],
})