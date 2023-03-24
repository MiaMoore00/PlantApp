const express = require("express");
const bodyParser = require("body-parser");
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
app.use(bodyParser.json({ type: "application/*+json" }));
app.use(bodyParser.raw({ type: "application/vnd.custom-type" }));
app.use(bodyParser.text({ type: "text/html" }));

app.post("/api/register", async (req, res) => {
  try {
    const { userName, email } = req.body;
    const newUser = await User.create({
      userName,
      email,
    });
    res.send(newUser);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

try {
  app.listen(PORT, () => {
    console.log(`Plant server listening on port ${PORT}!`);
  });
} catch (error) {
  console.log(error);
}
