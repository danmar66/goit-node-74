const express = require('express')

const app = express()

app.get('/', (request, response) => {
    // console.log(request.method)
    // console.log(request)
    response.send('<h1>Home page</h1>')
})

app.get('/contacts', (request, response) => {
    console.log(request.method)
    response.send('Contacts page')
})

app.listen(3000, () => {
    console.log('Server started')
})