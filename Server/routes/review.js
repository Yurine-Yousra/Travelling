const express = require('express')
const router = express.Router()
const VerifyUser = require('../utils/verifyToken').VerifyUser
const CreateReview = require('../controllers/reviewController').CreateReview

router.route('/:tourid').post(VerifyUser ,CreateReview)

module.exports = router