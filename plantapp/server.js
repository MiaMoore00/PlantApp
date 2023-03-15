const express = require("express");
const { Sequelize } = require("sequelize");
const cors = require("cors");
const { User } = require("./models");
const ejs = require("ejs");
const sequelize = new Sequelize(
  "postgres://postgres@localhost:5432/plantApp_database"
);

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());
app.set("view engine", "ejs");

app.post("/register", (req, res) => {
    User.create(req.body.userName)
      .then((userName) => res.json(userName))
      .catch((err) => res.status(400).json(err));
  });

app.listen(3001, () => {
  console.log(`Plant app server listening on port ${PORT}!`);
});
