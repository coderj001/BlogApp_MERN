const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const authRouter = require("./routes/auth");
const userRouter = require("./routes/users");

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
app.use("/api/users", userRouter);

app.listen("5000", () => {
  console.log("Backend Is Running");
});
