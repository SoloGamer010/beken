import express from "express";
import "./models/index.js";

const app = express();
const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server running in ${port}`);
  });