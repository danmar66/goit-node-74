const express = require('express')
const cors = require('cors')
const multer = require('multer')
const path = require('path')
const fs = require('fs/promises')

const app = express()

app.use(cors())

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const dirPath = path.join(__dirname, 'tmp')
    cb(null, dirPath)
  },
  filename: function (req, file, cb) {
    cb(null, Math.random() + file.originalname)
  },
})

const upload = multer({
  storage,
  limits: { fileSize: 102400 },
})

app.post('/upload', upload.single('image'), async (req, res, next) => {
  console.log('file', req.file)
  const { filename } = req.file
  try {
    const tmpPath = path.join(__dirname, 'tmp', filename)
    const publicPath = path.join(__dirname, 'public', filename)
    await fs.rename(tmpPath, publicPath)
    return res.json({ message: 'File saved' })
  } catch (error) {
    console.error('Error while moving file to /public', error)
    return res.status(500).json({ message: 'Internal server error' })
  }
})

app.post('/upload/many', upload.array('image'), async (req, res, next) => {
  try {
    console.log('files', req.files)
    return res.json({ message: 'ok' })
  } catch (error) {
    console.error('Error while moving file to /public', error.message)
    return res.status(500).json({ message: 'Internal server error' })
  }
})

app.listen(3000, () => console.log('server listening on port 3000'))
