//fetching auth controller
const sharedController = require("../Controllers/shared.controller.js");

const express = require("express");

const router = express.Router();

router.get("/", sharedController.getHome);

router.get("/500");

module.exports = router;
