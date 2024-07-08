const express = require('express')
const router = express.Router()
const CreateUser = require('../controllers/userController').CreateNewUser
const DeleteUser = require('../controllers/userController').DeleteUser
const UpdateUser = require('../controllers/userController').UpdateUser
const GetUser = require('../controllers/userController').GetUser
const GetAllUser = require('../controllers/userController').GetAllUsers
const Login = require('../controllers/userController').Login
const VerifyUser = require('../utils/verifyToken').VerifyUser
const VerifyAdmin = require('../utils/verifyToken').VerifyAdmin

router.route('/CreateUser').post(CreateUser)
router.route('/UpdateUser/:id').put( VerifyUser , UpdateUser)
router.route('/DeleteUser/:id').delete(DeleteUser)
router.route('/GetAllusers').get( VerifyAdmin ,GetAllUser)
router.route('/GetUser/:id').get(VerifyUser ,GetUser)
router.route('/Login').post(Login)

module.exports = router