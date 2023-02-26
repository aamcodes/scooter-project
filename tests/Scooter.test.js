const Scooter = require('../src/Scooter');
const User = require('../src/User');

describe('Scooter Properties', () => {
	let scooter = new Scooter();
	it('should create a instance of a Scooter class', () => {
		expect(scooter).toBeInstanceOf(Scooter);
	});
});

//Method tests
describe('Scooter Methods', () => {
	// tests here!
	let scooter = new Scooter();
	let user = new User('aaron', 'password', 27);

	//rent method
	it('should be rented', () => {
		scooter.rent(user);
		expect(scooter.user).toBeInstanceOf(User);
		expect(scooter.user.username).toBe('aaron');
	});

	//dock method
	it('should be docked', () => {
		scooter.dock('Station1');
		expect(scooter.station).toEqual('Station1');
	});

	//requestRepair method
	it('should be repaired', async () => {
		scooter.isBroken = true;
		scooter.requestRepair();
		await new Promise((r) => setTimeout(r, 3000));
		expect(scooter.isBroken).toBe(false);
	});

	//charge method
	it('should be charged', () => {
		scooter.charge = 0;
		scooter.recharge();
		expect(scooter.charge).toBe(100);
	});
});
