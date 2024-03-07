//const http = require("http"); //importing the core module

const express = require('express');  //importing express js here passed e() function as object

const app = express();    //Creating an Express Application

//All Middlewares goes down here
//Middleware 1
app.use('/add-product', (req, res, next) => {
  console.log("In another Middleware");
  res.send("<h1>This is 'Add Product' Page</h1>");
  next();
});
//Middleware 2
app.use('/', (req, res, next) => {
  console.log("In Middleware");
  res.send("<h1>This is Home Page</h1>");  // Move this line here
});

// const server = http.createServer( app );

// const portNo = 4000;
// server.listen(portNo, () => {
//   console.log("server is starting...");
// });
app.listen(4000);