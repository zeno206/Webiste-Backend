const usermodel = require("../models/quote");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

async function register(req, res) {
  try {
    const { username, email, password } = req.body;
    const isuserexist = await usermodel.findOne({
      $or: [{ username }, { email }],
    });
    if (isuserexist) {
      return res.status(500).json({
        message: "user already exist",
      });
    }
    const hash = await bcrypt.hash(password, 10);
    const reg = await usermodel.create({
      username,
      email,
      password: hash,
    });

    const token = jwt.sign({ id: reg._id }, process.env.SECRET_KEY);

    res.cookie("token", token);

    res.status(200).json({
      message: "data added sucessfuly",
      username: username,
      email: email,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "server is crashed",
    });
  }
}

async function Login(req, res) {
  try {
    const { username, email, password } = req.body;
    const userexist = await usermodel.findOne({
      $or: [{ username }, { email }],
    });
    if (!userexist) {
      return res.status(500).json({
        message: "user does not exist plz register first",
      });
    }
    const verifypass = await bcrypt.compare(password, userexist.password);
    if (!verifypass) {
      return res.status(404).json({
        message: "invalid password",
      });
    }
    const token = await jwt.sign({ id: userexist._id }, process.env.SECRET_KEY);
    res.cookie("token", token);

    res.status(200).json({
      message: "login sucessfull",
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: "login failed",
    });
  }
}

module.exports = { register, Login };
