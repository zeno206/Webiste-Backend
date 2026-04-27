const mongoose = require("mongoose");
require("dotenv").config();

async function Connectdb() {
  try {
    if (!process.env.MONGO_URI) {
      console.log("mongo uri is missing");
      process.exit(1);
    }
    await mongoose.connect(process.env.MONGO_URI);
    console.log("database connected sucessfully");
  } catch (error) {
    console.log(error);
  }
}

module.exports = Connectdb;
