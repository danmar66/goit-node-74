const Book = require('../../models/book')

const getAll = async (req, res) => {
  const { page, limit } = req.query
  const skip = (page - 1) * limit

  const result = await Book.find({ title: '1984' }).skip(skip).limit(limit)
  res.json(result)
}

module.exports = getAll
