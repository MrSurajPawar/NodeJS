const http = require("http"); //importing the core module

const app = require('express');  //importing express js here

const server = http.createServer( app );

const portNo = 4000
server.listen(portNo, () => {
  console.log("server is starting...");
});
