const express = require("express");
const regcontroller = require("../controllers/reg.controller");
const router = express.Router();

router.post("/reg", regcontroller.register);
router.post("/login", regcontroller.Login);

module.exports = router;
