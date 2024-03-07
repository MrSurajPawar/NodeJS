//const http = require("http"); //importing the core module

const express = require('express');  //importing express js here passed e() function as object

const app = express();    //Creating an Express Application

//All Middlewares goes down here
//Middleware 1
app.use( (req ,res, next) => {
  console.log("In the MiddleWare");
  next();   //allowing the request to proceed to the next middleware in the stack
});

//Middleware 2
app.use( (req, res, next) => {
  console.log("In another Middleware");
  res.send("<h1>Hello from middleware</h1>");
});


// const server = http.createServer( app );

// const portNo = 4000;
// server.listen(portNo, () => {
//   console.log("server is starting...");
// });
app.listen(4000);