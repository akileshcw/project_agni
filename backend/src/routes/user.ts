import { BodyParser } from "body-parser";
import { Router, Request, Response, NextFunction } from "express";
import { format } from "date-fns";

const express = require("express");
const cors = require("cors");
const bodyParser: BodyParser = require("body-parser");

const router: Router = express.Router();

const timeLog = (req: Request, res: Response, next: NextFunction) => {
  console.log("The request time is", format(Date.now(), "PP"));
  next();
};

router.use(cors());
router.use(bodyParser.json());
router.use(timeLog);

router.get("/", (req, res) => {
  res.send("Hi Karthika. This is the users page");
});

router.post("/", (req, res) => {
  console.log("request received for user post");
  const body = req.body;
  console.log("the received request body is", req.body);
  res.json({
    message: "The request body is received",
    receivedBody: Object.entries(body).map(([key, value]) => ({
      key: key,
      value: value,
    })),
  });
});

module.exports = { UserRouter: router };
