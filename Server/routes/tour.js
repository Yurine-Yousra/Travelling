const express = require('express')
const Tour = require('../Models/Tour')
const { TourSearched } = require('../controllers/tourController')
const router = express.Router()
const CreateTour = require('../controllers/tourController').CreateTour
const UpdatedTour = require('../controllers/tourController').UpdateTour
const DeleteTour =  require('../controllers/tourController').DeleteTour
const VerifyAdmin = require('../utils/verifyToken').VerifyAdmin
const GetSingleTour = require('../controllers/tourController').SingleTour
const Tours = require('../controllers/tourController').Tours
const ToursSearched = require('../controllers/tourController').TourSearched
const VerifyUser = require('../utils/verifyToken.js').VerifyUser
const FeaturedTours = require('../controllers/tourController.js').FeaturedTours
//tour routes
router.route('/createNewTour').post(VerifyAdmin ,CreateTour)
router.route('/UpdateTour/:id').put(VerifyAdmin ,UpdatedTour)
router.route('/DeleteTour/:id').delete(VerifyAdmin ,DeleteTour)
router.route('/tour/:id').get(GetSingleTour)
router.route('').get(Tours)
router.route('/search').get(ToursSearched)
router.route('/featured').get(FeaturedTours)

module.exports = router