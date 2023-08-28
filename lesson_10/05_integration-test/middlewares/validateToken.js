const jwt = require('jsonwebtoken')
const User = require('../models/user')
const { RequestError } = require('../helpers')
const { JWT_SECRET } = process.env

// console.log('JWT_SECRET = ', JWT_SECRET)

const validateToken = async (req, res, next) => {
  const authorizationHeader = req.headers.authorization || ''
  //   console.log('Headers = ', authorizationHeader)
  const [type, token] = authorizationHeader.split(' ')

  if (type !== 'Bearer') {
    throw RequestError(401, 'Token type is not valid')
  }

  if (!token) {
    throw RequestError(401, 'No token provided')
  }

  try {
    const payload = jwt.verify(token, JWT_SECRET)
    if (payload.type !== 'access') {
      return res.status(401).json({ message: 'Invalid token' })
    }
    const user = await User.findById(payload.id)
    req.user = user
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      throw RequestError(401, 'Token expired')
    }
    if (error instanceof jwt.JsonWebTokenError) {
      throw RequestError(401, 'Invalid token')
    }
  }

  next()
}

module.exports = validateToken
