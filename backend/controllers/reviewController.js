import Tour from '../models/Tour.js'
import Review from '../models/Review.js'
export const createReview = async (req, res) => {
  const tourId = req.params.tourId

  try {
    const tour = await Tour.findById(tourId)
    if (!tour) {
      return res.status(404).json({ success: false, message: "Tour not found" })
    }

    const newReview = new Review({ ...req.body })

    const savedReview = await newReview.save()

    tour.reviews.push(savedReview._id)
    await tour.save()

    res.status(200).json({
      success: true,
      message: "Review submitted",
      data: savedReview
    })
  } catch (err) {
    console.error("Review submission failed:")
    res.status(500).json({
      success: false,
      message: "Failed to submit review"
    })
  }
}
