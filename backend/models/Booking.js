import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema(
  

  {
    userId: {
      type: String,
    },
    userEmail: {
      type: String,
    },
    FullName: {
      type: String,
      required: true,
    },
    tourName: {
      type: String,
      required: true,
    },
    guestSize: {
     type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    bookAt: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);


export default mongoose.model("Booking", BookingSchema );
