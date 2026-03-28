import { NextFunction, Request, Response } from "express";
import { ApiError } from "../utils/ApiError.js";
import { verifyToken } from "../utils/jwt.js";

export const authMiddleware = async(
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const authHeader = req.headers.authorization;
    console.log("AUTHHEADER: ", authHeader);
    
    if(!authHeader){
        return next(new ApiError(401, "Unauthorized"));
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = verifyToken(token);
        req.userId = decoded.userId;
        next();
    } catch (error) {
        next(new ApiError(401, "Invalid token"));
    }
}