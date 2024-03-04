const http = require("http"); //importing the core module

const routes = require("./routes.js"); //custome module created by me

console.log(routes.someText);
const server = http.createServer(routes.handler);

const portNo = 4000;
server.listen(portNo, () => {
  console.log("server is starting...");
});
