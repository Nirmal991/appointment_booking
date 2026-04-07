import { IService } from "@/types";
import { z } from "zod";

export const createServiceSchema = z.object({
    title: z.string().min(5, "Title must be atleast 5 characters long"),
    description: z.string().min(5, "Description must be atleast 5 characters long"),
    serviceType: z.enum(["ONLINE", "OFFLINE"]),
    durationInMinutes: z.number().min(5).max(720),
    price: z.number().min(0),
    currency: z.string().length(3, "Currency must be a 3-letter code"),
    locationAddress: z.string().length(3).optional(),
})
    .superRefine((data, ctx) => {
        if (
            data.serviceType === "OFFLINE" &&
            (!data.locationAddress || data.locationAddress.trim() === "")
        ) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Location address is required for offline services",
                path: ["locationAddress"],
            })
        }
    });

export const updateServiceSchema = z.object({
    title: z.string().min(5).optional(),
    description: z.string().min(5).optional(),
    durationInMinutes: z.number().min(5).max(720).optional(),
    price: z.number().min(0).optional(),
    currency: z.string().length(3).optional(),
    locationAddress: z.string().optional(),
    isActive: z.boolean().optional(),
})

export type createServiceFormData = z.infer<typeof createServiceSchema>;
export type updateServiceFormData = z.infer<typeof updateServiceSchema>;