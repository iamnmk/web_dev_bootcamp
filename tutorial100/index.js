const http = require("http");
const fs= require ("fs");

const hostname = '127.0.0.5';
const port = 80;

const server = http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    res.end("HELLO WORLD");
});

server.listen(port, hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}/`)
});
