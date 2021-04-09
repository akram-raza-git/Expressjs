const express = require("express");
const mongoose = require("mongoose");
const authRouter = require("./router/auth");
const env = require("dotenv");
const post = require("./post");

//init
env.config();
const { PORT, CONNECT_DB } = process.env;
mongoose.connect(CONNECT_DB, { useNewUrlParser: true }, () =>
  console.log("connect to db")
);
const app = express();
app.use(express.json());
app.use("/product", post);
app.use("/api/user", authRouter);

app.listen(PORT, () => console.log(`server is running at port ${PORT}`));
