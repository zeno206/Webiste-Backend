const usermodel = require("../models/quote");

async function Getdata(req, res) {
  const getdata = await usermodel.find();
  res.status(200).json({
    message: "here your data",
    data: getdata,
  });
}

module.exports = Getdata;
