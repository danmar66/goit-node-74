const express = require('express')
const controllerWrapper = require('../../helpers/controllerWrapper')
const controller = require('../../controllers/auth')

const router = express.Router()

router.post('/registration', controllerWrapper(controller.registration))
router.post('/login', controllerWrapper(controller.login))
router.post('/refresh', controllerWrapper(controller.refreshTokens))

module.exports = router
