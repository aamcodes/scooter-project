class Scooter {
	static nextSerial = 1;
	// scooter code here
	constructor(station = null, user = null, charge = 100, isBroken = false) {
		this.station = station;
		this.user = user;
		this.serial = Scooter.nextSerial++;
		this.charge = charge;
		this.isBroken = isBroken;
	}

	rent(user) {
		if (this.charge > 20 && !this.isBroken) {
			this.user = user;
			this.station = null;
		}
	}

	dock(station) {
		this.user = null;
		this.station = station;
	}

	recharge() {
		while (this.charge < 100) {
			this.charge += 1;
			console.log('Battery:' + this.charge + '%');
		}
		console.log('Fully charged!');
	}

	requestRepair() {
		setTimeout(() => {
			this.isBroken = false;
			console.log('repair completed');
		}, 5000);
	}
}

module.exports = Scooter;
