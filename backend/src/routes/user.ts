import { BodyParser } from "body-parser";
import { Router, Request, Response, NextFunction } from "express";
import { format } from "date-fns";

const express = require("express");
const bodyParser: BodyParser = require("body-parser");

const router: Router = express.Router();

const timeLog = (req: Request, res: Response, next: NextFunction) => {
  console.log("The request time is", format(Date.now(), "PP"));
  next();
};

router.use(bodyParser.json());
router.use(timeLog);

router.get("/", (req, res) => {
  res.send("This is the users page");
});

router.post("/", (req, res) => {
  const body = req.body;
  res.json({
    receivedBody: Object.entries(body).map(([key, value]) => ({
      key: key,
      value: value,
    })),
  });
});

module.exports = { UserRouter: router };
