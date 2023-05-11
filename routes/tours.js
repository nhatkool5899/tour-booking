import express from "express";
import { createTour, deleteTour, getAllTour, getFeaturedTour, getSingleTour, getTourBySearch, getTourCount, updatedTour } from "./../controllers/tourController.js";

import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();



// create new tour
router.post('/', verifyAdmin, createTour) 

// update new tour
router.put('/:id', verifyAdmin, updatedTour) 

// delete new tour
router.delete('/:id', verifyAdmin, deleteTour) 

// get tour by search
router.get('/search/getTourBySearch', getTourBySearch)
router.get('/search/getFeaturedTours', getFeaturedTour)
router.get('/search/getTourCount', getTourCount)

// getSingle tour
router.get('/:id', getSingleTour) 

// getAll tour
router.get('/', getAllTour) 



export default router;