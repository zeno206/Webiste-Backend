const express = require("express");
const datacontroller = require("../controllers/data.controller");
const router = express.Router();

router.get("/data", datacontroller);

module.exports = router;
