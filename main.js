const express = require("express");
var cors = require('cors')
const pool = require("./db");
const bodyParser = require("body-parser");

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  console.log("hi");
  res.json({
    message: "hi",
  });
});

const userRouter = require("./routes/users");
app.use(cors())
app.use("/users", userRouter);

app.listen(3001);
