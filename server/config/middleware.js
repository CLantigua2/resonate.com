require("dotenv").config()
const express = require("express")
const passport = require("passport")
const morgan = require("morgan")
const cors = require("cors")
const helmet = require("helmet")
// const mysql = require('mysql')

// const authenticate = require('./customMiddleware/authenticate')

// config mysql connection
// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'user',
//     password:,
//     database:
// })

module.exports = server => {
    server.use(passport.initialize())
    server.use(express.json())
    server.use(helmet())
    server.use(cors())
    server.use(morgan("dev"))
    // server.use(authenticate)
}