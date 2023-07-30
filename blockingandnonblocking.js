// blocking (Synchronous) -- line by line execution
// non-blocking (Asynchronous)-- line by line execution not guaranteed -callbacks will fire

//Asynchronous example
const fs = require("fs");
fs.readFile("Numaan.txt", "utf-8",(err,data)=>{ //the callback function is called only after the whole file is read
    console.log(err,data);
    
}) ;
console.log("This is a message");