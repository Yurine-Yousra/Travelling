const express = require('express')
const router = express.Router()
const VerifyUser = require('../utils/verifyToken').VerifyUser
const CreateReview = require('../controllers/reviewController').CreateReview
const AllRev = require('../controllers/reviewController').GetRewiews
router.route('/:tourid').post( CreateReview)
router.route('').get(AllRev)
module.exports = router