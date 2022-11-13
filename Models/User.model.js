const db = require('../Data/database.js')

class User {
	constructor(uName, uEmail, uPassword, uAuthor, uViewer) {
		this.userName = uName;
		this.userEmail = uEmail;
		this.userPassword = uPassword;
		this.userAuthor = uAuthor; 
		this.userViewer = uViewer; 
	}

	async createUser() {
		const user = {
			name: this.userName,
			email : this.userEmail,
			password : this.userPassword,
			authorBool : this.userAuthor,
			viewerBool : this.userViewer,
		}
		await db.getDB().collection('users').insertOne(user)
	}

	async userExistCheck() {
		console.log('checking user')
		console.log(this.userEmail)
		const user = await db.getDB().collection('users').findOne({ email: this.userEmail })
		console.log(user)
		if (user) {
			return true
		}
		return false
	}
}

module.exports = User