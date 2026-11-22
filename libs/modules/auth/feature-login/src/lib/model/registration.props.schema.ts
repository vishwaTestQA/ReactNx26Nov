// import {z} from 'zod'
// export const registerSchema = z.object({
//    firstname: z.string().min(3, {message: "First name is required"}),
//    lastname: z.string().min(2, {message: "Last name is required"}),
//    email: z.string().email({message: "Invalid email address"}),
//    age: z.number().min(10, {message: "Age should be greater than 10"}),
//    phone: z.string().regex(/^\d{10}$/, { message: 'Phone number must be 10 digits' }),
//    password: z.string().min(6, {message: "Password must be at least 6 characters long"}),
//    confirmPassword: z.string(),
// }).refine((data) => data.password === data.confirmPassword, {
//     message: "password doesn't match",
//     path: ['confirmPassword'],
// })

import { z } from 'zod/v4';

export const registerSchema = z.object({
  firstname: z.string().min(3, { error: 'First name must be at least 3 characters' }),
  lastname: z.string().min(2, { error: 'Last name must be at least 2 characters' }),
  email: z.email({ error: 'Invalid email address' }), // Zod v4 syntax!
   age: z.number().min(10, {message: "Age should be greater than 10"}),
  phone: z.string().regex(/^\d{10}$/, { error: 'Phone number must be 10 digits' }),
  password: z.string().min(6, { error: 'Password must be at least 6 characters long' }),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  error: "Password doesn't match",
  path: ['confirmPassword'],
});
