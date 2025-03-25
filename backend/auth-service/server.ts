import e, { Request, Response } from "express";

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.json());
app.use(cors());

app.get("/auth-service", (req: Request, res: Response) => {
  res.send("This is auth service");
});

app.listen(3004, () => {
  console.log("auth server running ");
});
