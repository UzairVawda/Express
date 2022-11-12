function getHome(req, res, next) {
	res.status(200).send("Home")
}

module.exports = {
	getHome : getHome
}