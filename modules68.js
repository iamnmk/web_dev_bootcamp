//goto nodejs.org to study modules
//fs is for file system usually used to read and write files
const fs = require("fs");
let text = fs.readFileSync("jo.text", "utf-8");
text= text.replace("man", "Nader");
console.log("the content of the file is  " + text);
console.log("Creating a new file ----");
fs.writeFileSync("Numaan.txt", text);
