const express = require("express");

const app = express();

const adminRoutes = require("./routes/admin.js");
const shopRoutes = require("./routes/shop.js");

const bodyParser = require("body-parser");

//Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(adminRoutes);
app.use(shopRoutes);

//Calling server
app.listen(3000);