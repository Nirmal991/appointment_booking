import {z} from "zod"

export const createOrganizationSchema = z.object({
    name: z.string().min(3, "Organization name must be atleast 3 characters"),
    slug: z.string().min(3).regex(/^[a-z0-9-]+$/, "Slug must be URL friendly"),
    timezone: z.string(),
});