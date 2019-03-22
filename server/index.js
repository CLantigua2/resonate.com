require('dotenv').config()
const server = require('./server.js')
const port = process.env.PORT || 9000

server.listen(port, () => res.json({message: 'server is over 9000'}))