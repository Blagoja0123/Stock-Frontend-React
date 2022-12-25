import { z } from "zod"


export const ProductSchema = z.object({
    id: z.number(),
    name: z.string(),
    dscription: z.string(),
    price: z.number(),
    quantity: z.number(),
    createdAt: z.date(),
    updatedAt: z.date(),
})

export const CartProductSchema = z.object({
    userId: z.number(),
    productId: z.any(),
    productName: z.any(),
    price: z.any(),
    quantity: z.number(),
})

export type Product = z.TypeOf<typeof ProductSchema> | null;
export type CartProduct = z.TypeOf<typeof CartProductSchema> | null;