const getBooks = async (req, res) => {
  const { user } = req
  const { books } = user

  return res.json({ data: { books } })
}

module.exports = getBooks
