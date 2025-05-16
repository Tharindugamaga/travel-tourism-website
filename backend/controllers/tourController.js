import Tour from "../models/Tour.js";

// Create a new tour
export const createTour = async (req, res) => {
  const newTour = new Tour(req.body);

  try {
    const savedTour = await newTour.save();

    res.status(200).json({
      success: true,
      message: "✅Successfully created the tour.",
      data: savedTour,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "❌Failed to create the tour. Please try again.",
      error: err.message, // Include error message for debugging
    });
  }
};

//update tour
export const updateTour = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedTour = await Tour.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true },
    );
    res.status(200).json({
      success: true,
      message: "✅Successfully updated.",
      data: updatedTour,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "❌failed Update.",
    });
  }
};

//delete tour
export const deleteTour = async (req, res) => {
  const id = req.params.id;

  try {
    await Tour.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "✅Successfully deleted.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "❌failed delete.",
    });
  }
};
//getSingle tour
export const getSingleTour = async (req, res) => {
  const id = req.params.id;

  try {
    const tour = await Tour.findById(id).populate("reviews");
    res.status(200).json({
      success: true,
      message: "✅Successful.",
      data: tour,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "❌Not found.",
    });
  }
};

//getAll tour
export const getAllTour = async (req, res) => {
  // For pagination: default page = 0 if not provided
  const page = parseInt(req.query.page) || 0;

  try {
    const tours = await Tour.find({})
      .skip(page * 8)
      .limit(8);

    res.status(200).json({
      success: true,
      count: tours.length,
      message: "✅ Tours fetched successfully.",
      data: tours,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "❌ Tours not found.",
    });
  }
};

//get tour by search
export const getTourBySearch = async (req, res) => {
  const city = new RegExp(req.query.city, "i"); // Case-insensitive match
  const distance = parseInt(req.query.distance);
  const maxGroupSize = parseInt(req.query.maxGroupSize);

  try {
    const tours = await Tour.find({
      city,
      distance: { $gte: distance },
      maxGroupSize: { $gte: maxGroupSize },
    }).populate("reviews");

    res.status(200).json({
      success: true,
      message: "✅ Search successful.",
      data: tours,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "❌ Tours not found.",
    });
  }
};
// getFeaturedTour.js
export const getFeaturedTour = async (req, res) => {
  try {
    const tours = await Tour.find({ featured: true }).populate("reviews").limit(8);

    res.status(200).json({
      success: true,
      message: "✅ Tours fetched successfully.",
      data: tours,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "❌ Tours not found.",
    });
  }
};

// get tour counts
export const getTourCount = async (req, res) => {
  try {
    const tourCount = await Tour.estimatedDocumentCount();
    res.status(200).json({ success: true, data: tourCount });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to fetch" });
  }
};
