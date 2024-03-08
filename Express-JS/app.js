const express = require("express");
const bodyParser = require("body-parser");
const app = express();

//Middlewares
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/add-product", (req, res, next) => {
  res.send(
    "<form action='/product' method='POST'><input type='text' name='title' /><button type='submit'>Submit</button></form>"
  );
});

app.post("/product", (req, res, next) => {
  console.log(req.body); //to parse the body of the incoming request using the body parser
  res.redirect("/product");
});

app.get("/", (req, res, next) => {
  res.send("<h1>Hello From express</h1>");
});

//Calling server
app.listen(4000);
