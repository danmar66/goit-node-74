const jwt = require('jsonwebtoken')
const { authHelper } = require('../../helpers')
const Token = require('../../models/token')
const { JWT_SECRET: secret } = process.env

const refreshToken = async (req, res) => {
  const { refreshToken } = req.body
  let payload

  try {
    payload = jwt.verify(refreshToken, secret)
    if (payload.type !== 'refresh') {
      return res.status(400).json({ message: 'Invalid token' })
    }
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      throw RequestError(401, 'Token expired')
    }
    if (error instanceof jwt.JsonWebTokenError) {
      throw RequestError(401, 'Invalid token')
    }
  }

  const token = await Token.findOne({ tokenID: payload.id })

  if (token === null) {
    return res.status(400).json({ message: 'Invalid token' })
  }

  const newTokens = await authHelper.updateTokens(token.userID)

  return res.json(newTokens)
}

module.exports = refreshToken
