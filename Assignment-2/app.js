const express = require('express');

const app = express();


//Middlewares
app.use('/response' , (req , res, next) => {
    console.log("In Middleware 2");
    res.send("<h1>Response from Express.js</h2>");
});

app.use('/' , (req , res, next) => {
    console.log("In Middleware 1");
    res.send("<h1>Home Page...</h1>");
});

app.listen(3000);