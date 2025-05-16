import express from "express";
import {
  createTour,
  deleteTour,
  getAllTour,
  getSingleTour,
  updateTour,
  getTourBySearch,
  getFeaturedTour,
  getTourCount,
} from "./../controllers/tourController.js";

const router = express.Router();

//create new router
router.post("/", createTour);

//update  router
router.put("/:id", updateTour);

//delete router
router.delete("/:id", deleteTour);

//get single router
router.get("/:id", getSingleTour);

//get all  router
router.get("/", getAllTour);

//get tour by search
router.get("/search/getTourBySearch", getTourBySearch);

router.get("/search/getFeaturedTours", getFeaturedTour);

router.get("/search/getTourCount", getTourCount);

export default router;
