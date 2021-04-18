const express = require("express");
const mongoose = require("mongoose");
const env = require("dotenv");
const cors = require("cors");
const authRouter = require("./source/router/auth");
const memories = require("./source/router/memories");

//init
env.config();
const { PORT, CONNECT_DB } = process.env;
mongoose.connect(
  CONNECT_DB,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Connected to DB")
);
const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.json());
app.use("/memory", memories);
app.use("/user", authRouter);

app.listen(PORT, () => console.log(`server is running at port ${PORT}`));
