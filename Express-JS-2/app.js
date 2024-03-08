const express = require("express");

const path = require("path");

const app = express();

const adminRoutes = require("./routes/admin.js");
const shopRoutes = require("./routes/shop.js");

const bodyParser = require("body-parser");

//Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static( path.join(__dirname, "public") ));

app.use("/admin" , adminRoutes);       // Adding filters
app.use(shopRoutes);

// what if someone typed another url or routes so we have to show them page not found error message 
app.use((req ,res , next) => {
    res.status(404).sendFile(path.join(__dirname , "views" , "404.html"));
});

//Calling server
app.listen(3000);