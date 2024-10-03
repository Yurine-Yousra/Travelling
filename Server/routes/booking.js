const express = require('express')
const router = express.Router()
const CreateBooking = require('../controllers/bookingController').CreateBooking
const GetBooking = require('../controllers/bookingController').GetBooking
const GetAllBookings = require('../controllers/bookingController').GetAllBookings
const VerifyUser = require('../utils/verifyToken').VerifyUser



router.route('').post(CreateBooking)
router.route('/Bookings/:id').get( VerifyUser , GetBooking)




module.exports = router