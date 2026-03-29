import { prisma } from "../../lib/prisma.js"
import { ApiError } from "../../utils/ApiError.js"
import { createAvailabilityData } from "./availability.schema.js"

export const createAvailablityRule = async (
    data: createAvailabilityData,
    userId: string,
) => {
    const organization = await prisma.organization.findFirst({
        where: {
            id: data.organizationId,
            ownerId: userId,
        }
    })

    if (!organization) {
        throw new ApiError(400, "Organization not found")
    }


    const rule = await prisma.availabilityRule.create({
        data: {
            organizationId: data.organizationId,
            dayofWeek: data.dayofWeek,
            startTime: data.startTime,
            endTime: data.endTime,
        }
    })

    if(!rule) {
        throw new ApiError(404, "Failed to create availability rule");
    }
    return rule;
}

export const getAvailabilityRules = async (
    organizationId: string,
    userId: string,
) => {
    const organization = await prisma.organization.findFirst({
        where: {
            id: organizationId,
            ownerId: userId,
        }
    })

    if (!organization) {
        throw new ApiError(400, "Organization not found")
    }

    const rules = await prisma.availabilityRule.findMany({
        where: {
            organizationId,
        },
        orderBy: {
            dayofWeek: "asc",
        }
    })
    if(!rules) {
        throw new ApiError(404, "Failed to create availability rule");
    }
    return rules;
}

export const deleteAvailabilityRule = async (
    ruleId: string,
    userId: string,
) => {
    const rule = await prisma.availabilityRule.findUnique({
        where: {
            id: ruleId,
            organization: {
                ownerId: userId
            }
        }
    })

    if (!rule) {
        throw new ApiError(404, "Rule not found");
    }

    await prisma.availabilityRule.delete({
        where: {
            id: ruleId,
        }
    })

    return {
        message: "Rule deleted successfully"
    }
}