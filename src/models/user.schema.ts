import z from 'zod'

export const UserLoginSchema = z.object({
    username: z.string(),
    password: z.string(),
})

export const UserRegisterSchema = z.object({
    username: z.string(),
    email: z.string(),
    password: z.string(),
})

export const UserSchema = z.object({
    id: z.number(),
    username: z.string(),
    email: z.string(),
    password: z.string(),
    createdAt: z.date(),
    lastUpdatedAt: z.date(),
    orders: z.any(),
    orderCart: z.any(),
    orderCartId: z.number(),
})

export type CreateUserInput = z.TypeOf<typeof UserLoginSchema>;
export type UserRegisterInput = z.TypeOf<typeof UserRegisterSchema>;
export type User = z.TypeOf<typeof UserSchema> | null;