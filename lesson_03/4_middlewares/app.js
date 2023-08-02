const express = require('express')
const fs = require('fs/promises')
const moment = require('moment')
const books = require('./books')

const app = express()

// Middleware
app.use('/contacts', (req, res, next) => {
    console.log("First Middleware")
    next()
})

app.use( async (req, res, next) => {
    const {method, url} = req
    const date = moment().format("DD-MM-YYYY_hh:mm:ss")
    await fs.appendFile('server.log', `\n${method} ${url} ${date}`)
    next()
})

// Routes
app.get('/', (request, response) => {

    // 

    return response.send('<h1>Home page</h1>')
})

app.get('/contacts', (request, response) => {
    return response.send('Contacts page')
})

app.get('/contacts/admins', (request, response) => {
    return response.send('Admins Contacts page')
})

app.get('/books', (request, response) => {
    return response.json(books)
})

app.use((req, res) => {
    res.status(404).json({ message: "Not found" });
});

app.listen(3000, () => {
    console.log('Server started')
})