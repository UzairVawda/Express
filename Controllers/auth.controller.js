function getLogin(req, res, next) {
	res.status(200).render("auth/login")
}

function getSignup(req, res, next) {
	res.status(200).render("auth/signup")
}

module.exports = {
	getLogin : getLogin,
	getSignup : getSignup
}