import express  from "express";
import { authMiddleware } from "../../middlewares/auth.middleware.js";
import { createOrg, getMyOrg, getOrgBySlug } from "./organization.controller.js";

const router = express.Router();

router.route('/').post(authMiddleware, createOrg);
router.route('/get-orgs').get(authMiddleware, getMyOrg);
router.route('/:slug').get(authMiddleware, getOrgBySlug);

export default router;

