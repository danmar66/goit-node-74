const express = require('express')
const router = express.Router()
const userController = require('../../controllers/users')
const { validateToken } = require('../../middlewares')
const { controllerWrapper } = require('../../helpers')

router.get(
  '/info',
  controllerWrapper(validateToken),
  controllerWrapper(userController.getInfo)
)
router.get(
  '/books',
  controllerWrapper(validateToken),
  controllerWrapper(userController.getBooks)
)

router.post(
  '/books',
  controllerWrapper(validateToken),
  controllerWrapper(userController.addBook)
)

module.exports = router
