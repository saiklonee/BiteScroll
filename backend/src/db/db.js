require("dotenv").config();

const MONGODB_URI = process.env.MONGODB_URI;
const mongoose = require("mongoose");

function connectDB() {
  mongoose
    .connect(MONGODB_URI)
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = connectDB;
