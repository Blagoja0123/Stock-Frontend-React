import { z } from "zod";


export const OrderInputSchema = z.object({
    userId: z.number(),
    recipiant: z.string(),
    orderCartId: z.number(),
})

export type OrderInput = z.TypeOf<typeof OrderInputSchema>;