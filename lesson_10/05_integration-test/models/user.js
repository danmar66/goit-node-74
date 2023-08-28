const { Schema, model, Types } = require('mongoose')

const userSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    },
    password: {
      type: String,
      minLength: [6, 'Password should be at least 6 characters!'],
    },
    books: {
      type: [Types.ObjectId],
      rel: 'book',
    },
  },
  { versionKey: false, timestamps: true }
)

const User = model('user', userSchema)

module.exports = User
