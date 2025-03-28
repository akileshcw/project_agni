import { Request, Response } from "express";
const express = require("express");
import cors from "cors";
import bodyParser from "body-parser";
const userRouter = require("./routes/user");

const app = express();
const port = process.env.PORT || 3002;

app.use(cors());
app.use(bodyParser.json());
app.get("/", (req: Request, res: Response) => {
  console.log("the request is from ", req.query, req.hostname);
  res.send("Hello. This is Akil. Welcome");
});

app.use("/user", userRouter.UserRouter);

app.use((req: Request, res: Response) => {
  res.status(401);
  res.send("Unauthorized");
});

app.listen(port, () => {
  console.log(`server is running in port ${port}`);
});
