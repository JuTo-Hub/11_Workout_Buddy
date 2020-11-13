const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
var path = require("path");
const PORT = process.env.PORT || 3000;

let db = require("./models/");
const { Workout } = require("./models/");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

app.use(require("./routes/api.js"));
app.use(require("./routes/html.js"));
