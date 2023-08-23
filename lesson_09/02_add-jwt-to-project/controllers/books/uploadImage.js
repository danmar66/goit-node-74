const Book = require('../../models/book')
const fs = require('fs/promises')
const path = require('path')

const uploadImage = async (req, res) => {
  const { id } = req.params
  const { filename } = req.file
  const tmpPath = path.join(__dirname, '../../tmp', filename)
  const publicPath = path.join(__dirname, '../../public', filename)

  try {
    await fs.rename(tmpPath, publicPath)
  } catch (error) {
    await fs.unlink(tmpPath)
    throw error
  }

  const book = await Book.findByIdAndUpdate(
    id,
    {
      image: publicPath,
    },
    { new: true }
  )
  return res.json({ image: book.image })
}

module.exports = uploadImage
