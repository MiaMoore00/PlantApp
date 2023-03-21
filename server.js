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


app.post("/api/register", async (req, res) => {
    await User.create({
        userName: req.body.userName,
        email: req.body.email,
    })
    let newUser = await User.findAll({
        where: {
            userName: req.body.userName,
            email: req.body.email,
        }
    })
      .catch((err) => res.status(400).json(err));
      res.send(newUser)
  });


app.listen(3001, () => {
  console.log(`Plant app server listening on port ${PORT}!`);
});
