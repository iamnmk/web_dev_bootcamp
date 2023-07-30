console.log("This is about npm");
//need to install express modules first
const express = require("express");
const path = require("path");
const app= express();
const port=80;


//set the template engine as pug
app.set('view engine', 'pug');

//set the views directory
app.set('views',path.join(__dirname,'views'));



//our pug demo endpoint
app.get("/demo",(req,res)=>{
    res.status(200).render('demo',{title:'Hey Numaan', message:"Hello There PUBG"})
});


app.get("/",(req,res)=>{
    res.status(200).send("This is my first express app"); //in order to define status code
});

app.get("/about",(req,res)=>{
    res.send("This is my first about page in this express app");
});

app.post("/",(req,res)=>{
    res.send("This is my first express app");
});

app.listen(port,()=>{
    console.log("The application started")
});