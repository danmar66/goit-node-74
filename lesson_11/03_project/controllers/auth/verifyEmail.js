const { RequestError } = require('../../helpers')
const User = require('../../models/user')

const verifyEmail = async (req, res) => {
  const { token } = req.params

  const user = await User.findOne({ verifyToken: token })

  if (!user) {
    throw RequestError(400, 'User already verificated')
  }

  await User.findOneAndUpdate(
    { verifyToken: token },
    { verified: true, verifyToken: null },
    { new: true }
  )

  return res.status(200).json({ message: 'User verificated' })
}

module.exports = verifyEmail
