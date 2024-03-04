const fs = require('fs');

const requestHandler = (req, res) => {
    //Handling requests here
    const url = req.url;
    const method = req.method;
  
    if (url === "/") {
      res.setHeader("Content-Type", "text/html");
      res.write("<html>");
      res.write("<head><title>My first Server</title></head>");
      res.write(
        "<body><h1>Hello this is the Node js server</h1><br><form action='/create-user' method='POST'>USER : <input type='text' name='create-user'/><br><button type='submit'>Submit</button></form></body>"
      );
      res.write("</html>");
      return res.end();
    }
  
    if (url === "/create-user" && method === "POST") {
      const body = [];
      req.on("data", (chunk) => {
          //Event listener 1
          console.log(chunk);
          body.push(chunk);
        });
  
       return req.on('end' , () => {
          const parsedBody = Buffer.concat(body).toString();
          const userName = parsedBody.split("=")[1];
          console.log(userName);
          fs.appendFile('user.txt' , userName + '\n' , (err) => {
              if (err) {
                  console.log(err);
                  return res.end();
              }
              res.statusCode = 302;
              res.setHeader("Location" , "/");
              return res.end();
          });
      });
    }
}

module.exports = requestHandler;