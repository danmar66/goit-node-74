const mongoose = require('mongoose')
const dotenv = require('dotenv').config()

// dotenv.config()

// const DB_HOST = require('./config')

const { DB_HOST } = process.env

mongoose
    .connect(DB_HOST)
    .then(() => console.log("DB Connected"))
    .catch((err) => {
        console.error(err.message)
        process.exit(1)
    })