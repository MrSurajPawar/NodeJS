const express = require("express");
const rootDir = require("../util/path.js");
const path = require("path");
const router = express.Router();

// /admin/add-product => GET
router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(rootDir , "views" ,"add-product.html"));
});

// /admin/add-product => POST
router.post("/add-product", (req, res, next) => {
  console.log(req.body); //to parse the body of the incoming request using the body parser
  res.redirect("/");
});

module.exports = router;
