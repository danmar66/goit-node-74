const express = require('express')
const router = express.Router()
const controller = require('../../controllers/auth')
const { controllerWrapper } = require('../../helpers')

router.post('/registration', controllerWrapper(controller.registration))
router.post('/login', controllerWrapper(controller.login))
router.post('/refresh', controllerWrapper(controller.refreshToken))

module.exports = router
