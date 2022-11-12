function getLogin(req, res, next) {
	res.status(200).send("Hello From GET LOGIN")
}

function getSignup(req, res, next) {
	res.status(200).send("Hello From GET SIGNUP")
}

module.exports = {
	getLogin : getLogin,
	getSignup : getSignup
}