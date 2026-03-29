import express from 'express';
import { getAvailableSlotsController } from './slot.controller.js';

const router = express.Router();

router.route('/').get(getAvailableSlotsController);

export default router;