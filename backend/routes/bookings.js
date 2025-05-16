import express from 'express';
import { createBooking, getAllBooking, getBooking } from '../controllers/bookingsController.js';

const router = express.Router();

// ✅ Create a new booking
router.post('/', createBooking);

// ✅ Get all bookings
router.get('/', getAllBooking);

// ✅ Get a single booking by ID
router.get('/:id', getBooking);

export default router;
