const {readFileSync} = require('fs')
const http = require('http')
const { Server } = require('socket.io')

const httpServer = http.createServer((req, res) => {
    if (req.url !== '/') {
        res.writeHead(404)
        res.end('Not found')
        return
    }

    const content = readFileSync('index.html')
    const length = Buffer.byteLength(content)

    res.writeHead(200, {
        'Content-Type': 'text/html',
        'Content-Length': length
    })
    res.end(content)
})


const io = new Server(httpServer, {})

const PORT = 5000

io.on('connection', (socket) => {
    console.log(`socket id = ${socket.id}`)

    socket.on('disconnect', (reason) => {
        console.log(`disconnected ${socket.id} due to ${reason}`)
    })

    // socket.emit('chatMessage', 'Welcome to chat!')
    // socket.broadcast.emit('chatMessage', 'New user connected!')

    // socket.on('chatMessage', (message) => {
    //     socket.broadcast.emit('chatMessage', message)
    // })
})

httpServer.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})