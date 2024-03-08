const express = require("express");

const bodyParser = require("body-parser");
const path = require("path");

const homeRoutes = require("./routes/home.js");
const userRoutes = require("./routes/user.js");
const rootDir = require("./util/path.js");

const app = express();

//Middlewares
// app.use((req ,res , next) => {
//     const filePath = path.join(__dirname, "views", "404-2.html");
//     console.log(filePath);
// });

app.use(bodyParser.urlencoded({extended : false}));

app.use(userRoutes);    // "/user"
app.use(homeRoutes);    // "/"

// what if someone typed another url or routes so we have to show them page not found error message 
app.use((req ,res , next) => {
    const filePath = path.join(rootDir, "views", "pageNotFound.html");
    res.status(404).sendFile( filePath );
});

app.listen(4000 , () => {
    console.log("Server is started at 4000 port No.");
});