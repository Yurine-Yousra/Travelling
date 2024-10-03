const express = require('express')
const Tour = require('../Models/Tour')
const { TourSearched } = require('../controllers/tourController')
const router = express.Router()
const CreateTour = require('../controllers/tourController').CreateTour
const GetSingleTour = require('../controllers/tourController').SingleTour
const Tours = require('../controllers/tourController').Tours
const ToursSearched = require('../controllers/tourController').TourSearched
const FeaturedTours = require('../controllers/tourController.js').FeaturedTours
//tour routes
router.route('/createNewTour').post(CreateTour)
router.route('/tour/:id').get(GetSingleTour)
router.route('').get(Tours)
router.route('/search').get(ToursSearched)
router.route('/featured').get(FeaturedTours)

module.exports = router