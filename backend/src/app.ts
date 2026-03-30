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
import { errorHandler } from "./middlewares/error.middleware.js";

app.get('/health-check', (req: Request, res: Response) => {
    return res.status(200).json({success: true, message: "Fine"})
})

import userRouter from './modules/auth/auth.route.js';
import orgRouter from './modules/organization/organization.router.js';
import serviceRouter from './modules/service/service.route.js';
import availabilityRuleRouter  from './modules/availability/availability.routes.js';
import slotRouter from './modules/slot/slot.route.js';
import bookingRouter from './modules/booking/booking.route.js';

app.use('/api/user', userRouter);
app.use('/api/organization', orgRouter);
app.use('/api/service', serviceRouter);
app.use('/api/availability', availabilityRuleRouter);
app.use('/api/slot', slotRouter);
app.use('/api/booking', bookingRouter);

app.use(errorHandler);

export default app;