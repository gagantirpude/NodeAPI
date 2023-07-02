//import
import express from "express";
import userRouter from "./routes/userRoute.js";
import { config } from "dotenv";

//Server
export const app = express();

//
config({
  path: "./data/config.env",
});

//middleware
app.use(express.json());

//pre path , object name
app.use("/users", userRouter);

//root Route
app.get("/", (req, res) => {
  console.log("Server On");
  res.send("New Work");
});
