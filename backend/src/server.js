"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var port = process.env.PORT || 3002;
app.get("/", function (req, res) {
  console.log("the request is from ", req.query, req.ip, req.hostname);
  res.send("Hello karthika. This is Akil. Welcome");
});
app.use(function (req, res) {
  res.status(401);
  res.send("Unauthorized");
});
app.listen(port, function () {
  console.log("server is running in port ".concat(port));
});
