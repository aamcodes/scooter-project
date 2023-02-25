class User {
	// User code here
	constructor(username, password, age, loggedIn = false) {
		// Type Validations
		validateUser(username, password, age);
		this.username = username;
		this.password = password;
		this.age = age;
		this.loggedIn = loggedIn;
	}

	login(password) {
		if (password === this.password) {
			this.loggedIn = true;
		} else {
			throw new Error('incorrect password');
		}
	}

	logout() {
		this.loggedIn = false;
	}
}

function validateUser(username, password, age) {
	if (typeof username !== 'string')
		throw new Error('Username must be a string');
	if (typeof password !== 'string')
		throw new Error('Password must be a string');
	if (typeof age !== 'number') throw new Error('Age must be a number');
}

module.exports = User;
