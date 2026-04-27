const app = require("./src/app");
const Connectdb = require("./src/db/db.connection");

const port = 5000;

Connectdb();

app.listen(port, () => {
  console.log("app is listening on port 5000");
});
