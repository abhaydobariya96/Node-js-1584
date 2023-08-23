
const express = require("express")
const app = express()
const { connectDB } = require("./db/dbConnection");
const config = require("./config/config");
const routes = require("./routes/v1");
const http = require("http");


app.use("/v1",routes);
connectDB()

app.use((req, res, next) => {
     next(new Error("Route not found!"));
   });

const server = http.createServer(app)

server.listen(config.port, () => {
     console.log("server listning port number 4545!");
   });


// http.createServer((req, res) => {
//     fs.readFile("demo.html", (err, data) => {
//         res.writeHead(200, { "Content-Type": "text/html" })
//         res.write(data)
//         return res.end()
//     })

// }).listen((8080), () => { console.log("server in running"); })