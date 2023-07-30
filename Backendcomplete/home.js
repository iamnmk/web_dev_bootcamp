const http = require ("http");
const fs = require ("fs");


const hostname = '127.0.0.1';
const port = 80;
const home = fs.readFileSync("./home.html");
const ref = fs.readFileSync("./Ref.html")
const about = fs.readFileSync("./about.html")
const contact = fs.readFileSync("./contact.html")
const err = fs.readFileSync("./err.html")

const server = http.createServer((req,res)=>{
    console.log(req.url);
    url=req.url;// very important
    res.statusCode=200;
    res.setHeader('Content-Type', 'text/html');
    if (url=='/' || url == '/home'){
    res.end(home);
    }
    else if (url=='/Ref'){
        res.end(ref);
    }
    else if (url=='/contact'){
        res.end(contact);
    }
    else if (url=='/about'){
        res.end(about);
    }
    else{
        res.end(err);
    }
    });

server.listen(port,hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
});