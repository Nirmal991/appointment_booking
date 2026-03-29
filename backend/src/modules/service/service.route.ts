import express from 'express';
import { authMiddleware } from '../../middlewares/auth.middleware.js';
import { createServiceController, deleteServiceController, getOrganizationActiveServicesController, getOrgService, getPublicServicesController, getServiceController, updateServiceController } from './service.controller.js';

const router = express.Router();


router.route('/create-service').post(authMiddleware, createServiceController);

router.route('/organization/:orgId/active-service').get(authMiddleware, getOrganizationActiveServicesController);

router.route('/organization/:orgId').get(authMiddleware, getOrgService);

router.route('/:serviceId').get(authMiddleware, getServiceController);

router.route('/:serviceId').patch(authMiddleware, updateServiceController);

router.route('/:serviceId').delete(authMiddleware, deleteServiceController);

router.route('/public/:organizationId').get(getPublicServicesController);

export default router;