const http = require("http");
const routes = require("./routes.js");
//const routes = require("./routes.js");

const server = http.createServer(routes);

const portNo = 3000;
server.listen(portNo, () => {
  console.log("Server is started...");
});
