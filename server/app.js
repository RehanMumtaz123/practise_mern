const dotenv = require("dotenv");
const express = require("express");
const app = express();
const auth = require("./route/auth");
dotenv.config({ path: "./config.env" });
require("./db/connection");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-with, Content-Type, Accept"
  );
  next();
});

app.use(require("./route/auth"));
app.use(require("./route/login"));

// app.get("/", (req, res) => {
//   res.send("Hello");
// });

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`server is running on ${PORT}`));
