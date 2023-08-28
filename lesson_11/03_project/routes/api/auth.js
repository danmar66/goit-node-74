const express = require('express')
const router = express.Router()
const controller = require('../../controllers/auth')
const { controllerWrapper } = require('../../helpers')

router.post('/registration', controllerWrapper(controller.registration))
router.get('/verify/:token', controllerWrapper(controller.verifyEmail))
router.post('/login', controllerWrapper(controller.login))
router.post('/refresh', controllerWrapper(controller.refreshToken))

module.exports = router
