const express = require("express");
require("dotenv").config();
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const app = express();
const indexRouter = require("./routes/index");

const mongoose = require("mongoose");
const mongoDB = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PWD}@cluster0.q8yiqsr.mongodb.net/?retryWrites=true&w=majority`;
async function main() {
  await mongoose.connect(mongoDB);
}
main().catch((err) => console.log(err));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

app.use(function (err, req, res, next) {
  if (err) {
    res.send(`<h2>There was an error. ${err.message}</h2>`);
  }
});

app.listen(3000, console.log("App started on port 3000"));
