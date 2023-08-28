const User = require('../../models/user')

const addBook = async (req, res) => {
  const { user } = req
  const { id: bookId } = req.body

  user.books.push(bookId)

  await User.findByIdAndUpdate(user._id, user)

  return res.json({ books: user.books })
}

module.exports = addBook
