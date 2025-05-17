import express from "express";
import "dotenv/config";
import "./src/db/dbConnection.js";
import studentRouter from "./src/routes/studentRouter.js";
import cors from "cors";

const port = process.env.PORT || 4750;

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/students", studentRouter);

app.listen(port, () => {
  console.log(`server is run ${`http:localhost:${port}`}`);
});
