import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync.js";
import { createOrganization, getMyOrganization, getOrganizationBySlug } from "./organization.service.js";
import { createOrganizationSchema } from "./organization.schema.js";

export const createOrg = catchAsync(async (req:Request, res: Response) => {
    // console.log("BODY : ", req.body);
    
    const data = createOrganizationSchema.parse(req.body);
    // console.log("DATA: ", data);
     const userId = req.userId as string;
    const org = await createOrganization(
        userId,
        data.name,
        data.slug,
        data.timezone,
    )

    return res.status(201).json({
        success: true,
        data: org,
    })
})

export const getMyOrg = catchAsync(async (req: Request, res: Response) => {
    const userId = req.userId as string

    const orgs = await getMyOrganization(userId);

    return res.status(200).json({
        success: true,
        data: orgs
    })
})

export const getOrgBySlug = catchAsync(async (req:Request, res: Response) => {
    const slug = req.params.slug as string

    const org = await getOrganizationBySlug(slug);

    return res.status(200).json({
        success: true,
        data: org,
    })
})