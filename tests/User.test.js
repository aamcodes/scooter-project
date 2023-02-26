const User = require('../src/User');

// User tests here
describe('User Properties', () => {
	// Object
	let user = new User('aaron', 'password', 27);
	it('should create a instance of a User class', () => {
		expect(user).toBeInstanceOf(User);
	});

	// test username
	it('should have a username', () => {
		expect(user.username).toBe('aaron');
	});

	// test password
	it('should have a password', () => {
		expect(user.password).toBe('password');
	});

	// test age
	it('should have an age', () => {
		expect(user.age).toBe(27);
	});
});

describe('User Methods', () => {
	// test login
	let user = new User('aaron', 'password', 27);

	it('should be logged in', () => {
		user.login('password');
		expect(user.loggedIn).toBe(true);
	});

	// test logout
	it('should be logged out', () => {
		user.login('password');
		user.logout();
		expect(user.loggedIn).toBe(false);
	});
});
