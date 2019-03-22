


// server
const server = express()

// server -> middleware


// server.use("./config/passport")(passport)

server.get("/", (req, res) => {
    res.status(200).json({ api: "running" })
})

const port = process.env.PORT || 9000

server.listen(port, () => {
    console.log()
})