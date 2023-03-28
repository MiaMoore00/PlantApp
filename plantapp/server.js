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

app.post("/api/login", async (req, res) => {
  try {
    const { userName } = req.body;
    const user = await User.findOne({
      where: { userName },
    });
    if (user) {
      console.log(user.dataValues.id);
      res.send({ message: "Login successful!", userId: user.dataValues.id});
    } else {
      res.status(401).send({ message: "Invalid username" });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

app.put("/api/favorites", async (req,res) => {
  try {
    const {userId, favorites} = req.body;
    console.log(req.body)
    User.update({
      favorite: favorites
    },
    {
      where:{
        id: userId
      }
    })
    res.json("added to favorites")
  }
  catch (error){
    console.log(error);
  }
})

app.listen(PORT, async () => {
  console.log(`Listening on port ${PORT}`);
  try {
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.log("Unable to connect to the database:", error);
  }
});

// below is what daneen had previously, but we were having issues running the code with this format. So we changed it to the above and 
// get no errors listening to port :)

// try {
//   app.listen(PORT, () => {
//     console.log(`Plant server listening on port ${PORT}!`);
//   });
// } catch (error) {
//   console.log(error);
// }
