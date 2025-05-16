// routes/reviews.js or add under /api/v1/reviews

import express from 'express'
import { createReview } from '../controllers/reviewController.js'

const router = express.Router()


router.post('/:tourId', createReview)

export default router
