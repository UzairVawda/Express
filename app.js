//fetching auth routes
const sharedRoutes = require("./Router/shared.routes.js");
const authRoutes = require("./Router/auth.routes");

const express = require('express');
const app = express();

app.use(sharedRoutes);
app.use(authRoutes);

app.use(function(req, res, next) {
  res.send('PAGE NOT FOUND!');
})


app.listen(7860)