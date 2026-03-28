import { NextFunction, Request, Response } from "express";
import { success, ZodError } from "zod";

export const errorHandler = (
    err: any,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    let statusCode = err.statusCode || 500;
    let message = err.message || "Interval Server error"

    if (err instanceof ZodError) {
        console.log("ZOD ERROR: ", err);
        
        statusCode = 400;
        message = err.issues.map((e) => e.message).join(", ");
    }

    return res.status(statusCode).json({
        success: false,
        message,
    });
}