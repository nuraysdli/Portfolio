import express from "express";
import "dotenv/config";
import "./src/db/dbConnection.js";

const app = express();

const port = process.env.PORT || 4750;

app.listen(port, () => {
  console.log(`server is run ${`http:localhost:${port}`}`);
});
