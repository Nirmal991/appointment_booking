import express from 'express';
import { cancelBookingController, createBookingController, getBookingsController, getOrganizationBookingsController, getServiceBookingsController } from './booking.controller.js';

const router = express.Router();

router.route('/').post(createBookingController);
router.route('/:bookingId').patch(cancelBookingController);
router.route('/:bookingId').get(getBookingsController)
router.route('/organization/:organizationId').get(getOrganizationBookingsController);
router.route('/service/:serviceId').get(getServiceBookingsController);

export default router;
