const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const dirPath = path.join(__dirname, '../tmp')
    console.log('path = ', dirPath)
    cb(null, dirPath)
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9)
    cb(null, uniqueSuffix + '-' + file.originalname)
  },
})

const upload = multer({ storage })

module.exports = upload
