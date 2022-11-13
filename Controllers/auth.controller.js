const User = require('../Models/User.model')

function getLogin(req, res, next) {
	res.status(200).render("auth/login")
}

function getSignup(req, res, next) {
	res.status(200).render("auth/signup")
}

async function signupUser(req, res, next) {
	const body = req.body;
	const newUser = new User(body.userName, body.userEmail, body.userPassword, body.authorCheck, body.viewerCheck);
	try {
		await newUser.createUser();
		res.render('blog/viewAllBlogs')
	} catch (error) {
		console.log('failed to create user')
		next(error);
		return
	}
}

module.exports = {
	getLogin : getLogin,
	getSignup : getSignup,
	SignupUser : signupUser
}