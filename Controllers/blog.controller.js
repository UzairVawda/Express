// const User = require('../Models/User.model')

function getAllBlogs(req, res, next) {
	res.status(200).render("blog/allBlogs")
}

module.exports = {
	getAllBlogs : getAllBlogs
}