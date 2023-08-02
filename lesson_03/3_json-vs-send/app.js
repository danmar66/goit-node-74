const express = require('express')

const books = require('./books')

const app = express()

app.set('json spaces', 2)

app.get('/', (request, response) => {
    // console.log(request.method)
    // console.log(request)
    response.send('<h1>Home page</h1>')
})

app.get('/contacts', (request, response) => {
    response.send('Contacts page')
})

app.get('/books', (request, response) => {
    // response.send(books)
    // response.json(books)

    return response.send(null)
    // response.json(null)
})

app.listen(3001, () => {
    console.log('Server started')
})