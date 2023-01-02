const express = require('express')
const router = express.Router()
const usersContoller = require('../controllers/userController')
const verifyJWT = require('../middleware/verifyJWT')

router.use(verifyJWT)

router.route('/')
    .get(usersContoller.getAllUsers)
    .post(usersContoller.createNewUser)
    .patch(usersContoller.updateUser)
    .delete(usersContoller.deleteUser)

module.exports = router