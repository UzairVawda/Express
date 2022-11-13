//fetching auth controller
const blogController = require("../Controllers/blog.controller");

const express = require("express");

const router = express.Router();

router.get("/blogs", blogController.getAllBlogs);

module.exports = router;
