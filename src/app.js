const express = require("express");
const regroutes = require("./routes/reg.routes");
const chatboxroutes = require("./routes/chatbox.routes");
const dataroutes = require("./routes/data.routes");
const cookieparser = require("cookie-parser");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cookieparser());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  }),
);
app.use("/api/post", regroutes);
app.use("/api/get", dataroutes);
app.use("/api", chatboxroutes);

module.exports = app;
