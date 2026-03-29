import express from "express";
import { createAvailabilityRuleController, deleteAvailabilityRuleController, getAvailabilityRulesController } from "./availability.controller.js";
import { authMiddleware } from "../../middlewares/auth.middleware.js";

const router = express.Router();

router.route('/').post(authMiddleware, createAvailabilityRuleController)
router.route('/:organizationId').get(authMiddleware, getAvailabilityRulesController)
router.route('/:ruleId').delete(authMiddleware, deleteAvailabilityRuleController)

export default router;