const User = require('../../models/user')
const { RequestError } = require('../../helpers')
const bcrypt = require('bcrypt')

const registration = async (req, res) => {
  // -- Handle duplicate error

  // try {
  // const result = await User.create(req.body)
  // res.status(201).json(result)
  // } catch (error) {
  //     if (error.message.includes('E11000 duplicate key')) {
  //         throw RequestError(409, 'User with this email already exist!')
  //     }
  // }

  // -- Base user registration

  // const result = await User.create(req.body)
  // res.status(201).json(result)

  const { email, password } = req.body
  const salt = await bcrypt.genSalt()
  const hashedPassword = await bcrypt.hash(password, salt)

  const result = await User.create({
    email,
    password: hashedPassword,
  })

  return res.status(201).json({
    id: result._id,
    email,
  })
}

module.exports = registration
