const http = require("http");
const fs = require("fs");

const server = http.createServer( ( req, res)    => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {  // path /root
        res.setHeader("Content-Type" , "text/html");
        res.write("<html>");
        res.write("<head><title>My first Server</title></head>");
        res.write('<body><form action="/message" method="POST"><input type="text" name="message" /><button type="submit">Submit</button></form></body>');
        res.write("</html>");
        return res.end();
    } 

    if (url === "/message" && method === "POST") {
        fs.writeFileSync("message.txt" , "DUMMY");
        res.statusCode = 302;
        res.setHeader("Location" , "/");
        return res.end();
    }
    // home page
    res.setHeader("Content-Type" , "text/html");
    res.write("<html>");
    res.write("<head><title>My first Server</title></head>");
    res.write('<body><h1>Hello this is the Node js server</h1></body>');
    res.write("</html>");
    res.end();
});

const portNo = 3000;

server.listen(portNo , () => {
    console.log("server is starting...");
});