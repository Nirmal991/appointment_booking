import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync.js";
import { loginSchema, registerSchema } from "./auth.schema.js";
import { getUserById, loginUser, registerUser } from "./auth.service.js";

export const register = catchAsync(async (req: Request, res: Response) => {
    const data = registerSchema.parse(req.body)
    const result = await registerUser(data.name, data.email, data.password);
    return res.status(201).json({
        success: true,
        data: result,
    });
});

export const login = catchAsync(async (req:Request, res: Response) => {
    const data = loginSchema.parse(req.body);
    const result = await loginUser(data.email, data.password);
    return res.status(201).json({
        success: true,
        data: result,
    })
})


export const getUser = catchAsync(async (req: Request, res: Response) => {
    const userId = req.userId as string;
    const result = await getUserById(userId);
    return res.status(200).json({
        success: true,
        data: result,
    })
})