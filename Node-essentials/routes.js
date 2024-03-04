const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    // path /root
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My first Server</title></head>");
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="msg" /><button type="submit">Submit</button></form></body>'
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    //Creating the stream of data flow
    const body = [];
    req.on("data", (chunk) => {
      //Event listener 1
      console.log(chunk);
      body.push(chunk);
    });

    return req.on("end", () => {
      //Event listener 2
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      //   asynchronous File writing operation
      fs.writeFile("msg.txt", message, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My first Server</title></head>");
  res.write("<body><h1>Hello this is the Node js server</h1></body>");
  res.write("</html>");
  res.end();
};

//way to export file as a module is by using 'module' node js global object with its property export
//module.exports = requestHandler;

//diff ways to do
// module.exports = {
//     handler : requestHandler,
//     someText : 'Some text here' , 
// };

// module.exports.handler = requestHandler;
// module.exports.someText = "Some hard coded text";

exports.handler = requestHandler;
exports.someText = "some hard coded text 2";