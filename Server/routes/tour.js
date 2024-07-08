const express = require('express')
const { GetSingleTour } = require('../controllers/tourController')
const router = express.Router()
const CreateTour = require('../controllers/tourController').CreateTour
const UpdatedTour = require('../controllers/tourController').UpdateTour
const DeleteTour =  require('../controllers/tourController').DeleteTour
const GetTour =  require('../controllers/tourController').GetSingleTour
const GetAllTours =  require('../controllers/tourController').GetAllTours
const GetTourBySearch = require('../controllers/tourController').GetTourBySearch
const FeaturedTours = require('../controllers/tourController').GetFeaturedTours
const CountTour = require('../controllers/tourController').getTourCount
const VerifyAdmin = require('../utils/verifyToken').VerifyAdmin
//tour routes
router.route('/createNewTour').post(VerifyAdmin ,CreateTour)
router.route('/UpdateTour/:id').put(VerifyAdmin ,UpdatedTour)
router.route('/DeleteTour/:id').delete(VerifyAdmin ,DeleteTour)
router.route('/AllTours').get(GetAllTours)
router.route('/tour/:id').get(GetSingleTour)
router.route('/tourSearched').get(GetTourBySearch)
router.route('/FeaturedTours').get(FeaturedTours)
router.route('/TourCount').get(CountTour)

module.exports = router