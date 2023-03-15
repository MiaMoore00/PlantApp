const express = require("express");
const { Sequelize } = require("sequelize");
const cors = require("cors");
const { Users } = require("./models");
const ejs = require("ejs");
const sequelize = new Sequelize(
  "postgres://postgres@localhost:5432/plantApp_database"
);

const app = express();
const PORT = 3012;

app.use(cors());
app.use(express.json());
app.set("view engine", "ejs");

app.listen(3012, () => {
  console.log(`Plant app server listening on port ${PORT}!`);
});
