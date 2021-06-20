const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

const app = express();

mongoose
  .connect(process.env.MONDO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(console.log("Connect To Mongodb"))
  .catch((err) => console.log(err));

app.listen("5000", () => {
  console.log("Backend Is Running");
});
