const User = require('../src/User');

// User tests here
describe('User Properties', () => {
	// Object
	let newUser = new User('aaron', 'password', 27);
	it('should create a instance of a User class', () => {
		expect(newUser).toBeInstanceOf(User);
	});

	// test username
	it('should have a username', () => {
		expect(newUser.username).toBe('aaron');
	});

	// test password
	it('should have a password', () => {
		expect(newUser.password).toBe('password');
	});

	// test age
	it('should have an age', () => {
		expect(newUser.age).toBe(27);
	});
});

describe('User Methods', () => {
	// test login
	let newUser = new User('aaron', 'password', 27);

	it('should be logged in', () => {
		newUser.login('password');
		expect(newUser.loggedIn).toBe(true);
	});

	// test logout
	it('should be logged out', () => {
		newUser.login('password');
		newUser.logout();
		expect(newUser.loggedIn).toBe(false);
	});
});
