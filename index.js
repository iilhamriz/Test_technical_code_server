const express = require("express");
const app = express();
const http = require("http")
const cors = require("cors")
const generate = require('./routes/generate')


app.use(express.json())
app.use(
    cors({
        // 'Access-Control-Allow-Origin': "http://localhost:3000/"
        origin: "http://localhost:3000"
    })
)

app.get("/", async (req, res, next) => {
    res.write("<h1>test</h1>");
    res.end();
  });

app.use('/api/generate', generate);

const server = http.createServer(app);

server.listen(8080, () => {
    console.log("server running")
})