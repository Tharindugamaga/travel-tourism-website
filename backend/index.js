import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import tourRoute from "./routes/tours.js";
import userRouter from "./routes/users.js";
import authRouter from "./routes/auth.js";
import reviewRouter from './routes/reviews.js';
import bookingRoute from './routes/bookings.js';




dotenv.config();
const app = express();
const port = process.env.PORT || 8000;

const corsOption = {
  origin: true,
  credentials: true // ✅ FIXED
};

// Database connection
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("☑️ :MongoDB database connected");
  } catch (err) {
    console.log("❌:MongoDB connection failed:", err);
  }
};

// Middleware
app.use(express.json());
app.use(cors(corsOption));
app.use(cookieParser());

// Routes
app.use("/api/v1/tours", tourRoute);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/review", reviewRouter);
app.use('/api/v1/booking', bookingRoute );



// Start server
app.listen(port, () => {
  connect();
  console.log("🚀:Server started on port", port);
});
