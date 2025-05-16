import Booking from '../models/Booking.js';
import mongoose from 'mongoose';


export const createBooking = async (req, res) => {
  const newBooking = new Booking(req.body);

  try {
    const savedBooking = await newBooking.save();
    res.status(200).json({
      success: true,
      message: "✅Booking created successfully",
      data: savedBooking,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "❌Failed to create booking",
      error: err.message,
    });
  }
};
// Get single booking
export const getBooking = async (req, res) => {
  const id = req.params.id.trim();  // trim whitespace/newlines

  // Validate ObjectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      success: false,
      message: "Invalid booking ID format",
    });
  }

  try {
    const book = await Booking.findById(id);

    if (!book) {
      return res.status(404).json({
        success: false,
        message: "❌ Not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "✅ Successful",
      data: book,
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error: err.message,
    });
  }
};

//get all booking
export const getAllBooking =async (req,res)=>{

    try {
        const books =await Booking.find(id);

    res.status(200).json({
      success: true,
      message: "✅successful",
      data: books,
    });
        
    } catch (err) {
        res.status(500).json({
      success: false,
      message: "❌internal server error",
      error: err.message,
    });
        
    }
}
