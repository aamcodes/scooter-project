const User = require('./User');
const Scooter = require('./Scooter');

class ScooterApp {
	// ScooterApp code here
	constructor() {
		this.stations = {
			Station1: [],
			Station2: [],
			Station3: [],
		};
		this.registeredUsers = {
			/**
			 * "username": User Node
			 */
		};
	}

	registerUser(username, password, age) {
		if (this.registeredUsers[username]) {
			throw new Error('already registered');
		} else if (age < 18) {
			throw new Error('too young to register');
		} else {
			let user = new User(username, password, age);
			this.registeredUsers[username] = user;
			console.log('user has been registered');
			return user;
		}
	}

	loginUser(username, password) {
		let user = this.registeredUsers[username];
		if (user.password === password) {
			user.loggedIn = true;
			console.log('user has been logged in');
		} else if (user === undefined || user === null) {
			throw new Error('Username or password is incorrect');
		} else if (user.password !== password) {
			throw new Error('Username or password is incorrect');
		}
	}

	logoutUser(username) {
		let user = this.registeredUsers[username];
		if (!user) {
			throw new Error('no such user is logged in');
		} else {
			user.loggedIn = false;
			console.log('user is logged out');
		}
	}

	createScooter(station) {
		let stationExists = this.stations[station];
		if (!stationExists) {
			throw new Error('no such station');
		} else {
			let scooter = new Scooter(station);
			stationExists.push(scooter);
			console.log('created new scooter');
		}
	}

	dockScooter(scooter, station) {
		let newDockedStation = this.stations[station];
		if (!this.stations[station]) {
			throw new Error('no such station');
		} else if (scooter.station === station) {
			throw new Error('scooter already at station');
		} else {
			newDockedStation.push(scooter);
			scooter.station = station;
			// also removing user from scooter, this may cause issues if we call dock() on Scooter afterwards
			scooter.user = null;
			console.log('scooter is docked');
		}
	}

	rentScooter(scooter, user) {
		if (scooter.user) {
			throw new Error('scooter already rented');
		} else {
			let foundStation = scooter.station;
			let arr = this.stations[foundStation];
			for (let i = 0; i < arr.length; i++) {
				let foundScooter = arr[i];
				if (foundScooter.serial === scooter.serial) {
					arr.splice(i - 1, 1);
					foundScooter.user = user;
					return;
				}
			}
		}
	}

	print() {
		let users = 0;
		for (let station of this.stations) {
			users += station.length;
		}
		let obj = {
			stations: [this.stations],
			stationsLength: users,
			registeredUsers: [this.registeredUsers],
		};
		console.log(obj);
	}
}

module.exports = ScooterApp;
