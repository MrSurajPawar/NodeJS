const express = require("express");
const path = require("path");
const rootDir = require("../util/path.js");
const router = express.Router();

router.use("/" , (req , res, next) => {
    res.sendFile( path.join( rootDir , "views" , "home.html") );
});

module.exports = router;