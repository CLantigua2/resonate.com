require("dotenv").config()
const express = require("express")
const passport = require("passport")
const morgan = require("morgan")
const cors = require("cors")
const helmet = require("helmet")


// server
const server = express()

// server -> middleware

server.use(passport.initialize())
server.use(express.json())
server.use(helmet())
server.use(cors())
server.use(morgan("dev"))
// server.use("./config/passport")(passport)

server.get("/", (req, res) => {
    res.status(200).json({ api: "running" })
})

const port = process.env.PORT || 9000

server.listen(port, () => {
    console.log(`This server is over 🔥🔥${port}🔥🔥!!`)
})