import dotenv from "dotenv";
dotenv.config({
    path: "./env"
})
import express, {Request, Response} from 'express';
import cors from 'cors'
import cookieParser from "cookie-parser";

const app = express();

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(
    cors({
        origin: process.env.CORS_ORIGINS,
        credentials: true
    })
)
app.use(cookieParser())

app.get('/health-check', (req: Request, res: Response) => {
    return res.status(200).json({success: true, message: "Fine"})
})

import userRouter from './modules/auth/auth.route.js';
import orgRouter from './modules/organization/organization.router.js';

app.use('/api/user', userRouter);
app.use('/api/organization', orgRouter);

export default app;