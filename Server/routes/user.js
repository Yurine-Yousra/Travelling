const express = require('express')
const router = express.Router()
const CreateUser = require('../controllers/userController').CreateNewUser
const Login = require('../controllers/userController').Login

router.route('/CreateUser').post(CreateUser)
router.route('/Login').post(Login)

module.exports = router