const Scooter = require('../src/Scooter');
const User = require('../src/User');
const ScooterApp = require('../src/ScooterApp');

// ScooterApp tests here
describe('ScooterApp Functionality Tests', () => {
	let scooterApp = new ScooterApp();
	// register user
	it('should register a user and add the user to registered list', () => {
		scooterApp.registerUser('aaron', 'password', 27);
		expect(scooterApp.registeredUsers['aaron']).toBeInstanceOf(User);
		let newUser = scooterApp.registeredUsers['aaron'];
		expect(newUser.username).toEqual('aaron');
	});

	// log in
	it('should log the user in', () => {
		scooterApp.registerUser('melissa', 'password', 25);
		scooterApp.loginUser('melissa', 'password');
		let user = scooterApp.registeredUsers['melissa'];
		expect(user.loggedIn).toBe(true);
	});

	// log out
	it('should log the user out', () => {
		scooterApp.logoutUser('melissa');
		let user = scooterApp.registeredUsers['melissa'];
		expect(user.loggedIn).toBe(false);
	});

	// rent scooter
	it('should rent a scooter', () => {
		let user = new User('brandon', 'password', 28);
		let scooter = new Scooter();
		scooterApp.stations['Station1'].push(scooter);
		scooter.station = 'Station1';
		scooterApp.rentScooter(scooter, user);
		expect(scooter.user).toBeInstanceOf(User);
	});

	it('should dock a scooter', () => {
		let scooterApp2 = new ScooterApp();
		let user = new User('kylie', 'password', 20);
		let scooter = new Scooter();
		scooter.user = user;
		scooterApp2.dockScooter(scooter, 'Station1');
		expect(scooter.user).toBe(null);
	});
});
