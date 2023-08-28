const User = require('../../models/user')
const { RequestError, sendMail } = require('../../helpers')
const bcrypt = require('bcrypt')
const { v4 } = require('uuid')

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

  const verifyToken = v4()

  await sendMail({
    to: email,
    subject: 'Please, confirm your email',
    html: `<a href='localhost:3000/api/auth/verify/${verifyToken}'>Confirm your email</a>`,
  })

  const result = await User.create({
    email,
    password: hashedPassword,
    verifyToken,
  })

  return res.status(201).json({
    id: result._id,
    email: result.email,
  })
}

module.exports = registration
