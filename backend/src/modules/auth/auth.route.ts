import  express from "express";
import { getUser, login, register } from "./auth.controller.js";
import { authMiddleware } from "../../middlewares/auth.middleware.js";


const router = express.Router();


router.route('/register').post(register);
router.route('/login').post(login);
router.route('/get-user').get(authMiddleware,getUser);

export default router;


