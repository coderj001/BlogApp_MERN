const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const authRouter = require("./routes/auth");

dotenv.config();

const app = express();

app.use(express.json());

mongoose
  .connect(process.env.MONDO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(console.log("Connect To Mongodb"))
  .catch((err) => console.log(err));

app.use("/api/auth", authRouter);

app.listen("5000", () => {
  console.log("Backend Is Running");
});
