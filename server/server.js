const express = require('express')
const configureMiddleware = require('./config/middleware.js')

const server = express()

// routes will come through here
// const {} = require('./routers/')

configureMiddleware(server)

server.get('/', (req, res) => {
    return res.status(200).json({ message: 'server is alive!' })
})

// server.use('baseRoute/', HTTP routes)

module.exports = server