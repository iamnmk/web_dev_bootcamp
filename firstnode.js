const http = require('http');

const hostname = '127.0.0.5';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Navigation Bar</title>
      
  </head>
  <style> 
  .navbar li {
    list-style: none;
    padding: 20px 20px;
    margin: auto;
    float: left;
    }
    .navbar{
        background-color: black;
        border-radius: 14px;
    }
   
    .navbar ul {
        overflow: hidden;
    }

    .navbar li a {
        text-decoration: none;
        color: seashell;
    }
    .navbar li a:hover{
        cursor: pointer;
        color: rgb(102, 13, 32);
    }

    .search {
        float: right;
        padding-top: 20px;
        padding-right: 90px;
        width: auto;
    }

    .navbar input{
        border: 2px black;
        border-radius: 4em;
        padding: 5px;
        padding-left: 40px;
    }
    .button{

        float: left;
        margin: 18px;
        border: 2px white;
        padding-top: 5px;
        padding-bottom: 5px;
    }
    .button:hover {
        background-color:black;
        color:white;
        cursor: help;
    }

    .sample {
        background-color: black;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        color: rgb(3, 17, 17);
        text-align: left;
        font-size: large;
        border: 2px black;
        margin: 70px;
        padding: 20px;
        background-image: url(https://st4.depositphotos.com/1719830/i/600/depositphotos_311176302-stock-photo-dumbbell-exercise-in-fitness-gym.jpg);
        background-repeat: no-repeat;
        background-position: center;
        height: 400px; ;
        width: 400px;
        background: size 400px; 
        border:50px indigo;
        border-radius: 50px;
    }
    .sample a{
        text-decoration: none;
        text-decoration-thickness: 3px;
        background-color: black;
        color: white;
    }

  </style>
  
  <body style="background-color: burlywood;">
      <nav class="navbar">
          <ul>
              <li> <a href="#">Home</a> </li>
              <li> <a href="#">References</a> </li>
              <li> <a href="#">About</a> </li>
              <li> <a href="#">Contact us</a> </li>
              <li> <a href="#">Others</a> </li>
              <div class="search">
                  <input type="search" placeholder="Search this website">
              </div>
              </li>
  
              <button class="button">More</button>
          </ul>
  
  
      </nav>
      <div>
  <p class="sample">
  
  Cant bulk even after eating too much?
  Well, <b>DONT WORRY</b> because we got you!!
  <a href="https://www.bulk.com/uk/" target="_blank">Click here to understand <b>HOW??</b></a>
  
  </p>
      </div>
  </body>
  
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});