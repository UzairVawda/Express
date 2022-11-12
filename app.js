const path = require("path");

// database
const db = require("./Data/database");

// fetching auth routes
const sharedRoutes = require("./Router/shared.routes.js");
const authRoutes = require("./Router/auth.routes");

const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "Views"));
app.use(express.urlencoded({ extended: false }));
// app.use(express.json())
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
