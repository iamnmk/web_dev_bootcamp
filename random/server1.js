const http = require("http");
const fs = require("fs");
const filecontent = fs.readFileSync("navigation.html")

const server = http.createServer((req,res)=>{
    res.writeHead(200, {"Content-Type": "Text/html"});
    res.end(filecontent);
});

server.listen(80, '127.0.0.1', ()=>{
    console.log("The server is running at http://${hostname}:${port}");

})