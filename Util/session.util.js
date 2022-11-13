function fromSession(req) {
	const sessionData = req.session.user;
	console.log(sessionData);
	req.session.user = null;
	return sessionData;
}

function toSession(req, newData, action) {
	req.session.user = newData;
	req.session.save(action)
}

module.exports = {
	fromSession : fromSession,
	toSession : toSession
}