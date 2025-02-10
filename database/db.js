require("dotenv").config();
const mongoose = require("mongoose");

const MONGO_URI = process.env.MONGO_URI;

const conntectToDB = async () => {
  try {
    mongoose.connect(MONGO_URI);
    console.log("MongoDB connected sucessfully");
  } catch (error) {
    console.error("MongoDB connection failed!");
    process.exit(1);
  }
};

module.exports = conntectToDB;
