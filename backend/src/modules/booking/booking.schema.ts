import z from 'zod';

export const createBookingSchema = z.object({
    serviceId: z.uuid(),
    organizationId: z.uuid(),
    customerName: z.string().min(1, "Customer name is required"),
    customerEmail: z.email("Invalid email address"),
    customerPhone: z.string().optional(),
    startTime: z.iso.datetime(),
})
.strict();


export type createBookingData = z.infer<typeof createBookingSchema>;