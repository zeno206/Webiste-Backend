const mongoose = require("mongoose");

const Userschema = new mongoose.Schema({
  username: "string",
  email: "string",
  password: "string",
});

const usermodel = mongoose.model("user", Userschema);

module.exports = usermodel;
