const path = require("path");

// Importing express session package
const expressSession = require('express-session');

// database
const db = require("./Data/database");

// Session Config File
const sessionConfig = require('./Config/session');

// fetching auth routes
const sharedRoutes = require("./Router/shared.routes.js");
const authRoutes = require("./Router/auth.routes");

const express = require("express");
const app = express();
const session = sessionConfig(); // Creating session using defined config

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "Views"));
app.use(express.urlencoded({ extended: false }));
app.use(expressSession(session)); // Passing configued session to express

app.use(express.static("public"));
app.use(
  "/css",
  express.static(path.join(__dirname, "node_modules/bootstrap/dist/css"))
);
app.use(
  "/js",
  express.static(path.join(__dirname, "node_modules/bootstrap/dist/js"))
);

app.use(sharedRoutes);
app.use(authRoutes);

app.use(function (req, res, next) {
  res.send("PAGE NOT FOUND!");
});

db.connectToDB()
  .then(function () {
    app.listen(7860);
  })
  .catch(function (error) {
    console.log("CONNECTTODB FAILED FROM APP: ERROR");
    console.log(error);
  });
