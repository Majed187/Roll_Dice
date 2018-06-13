function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
let dice = {
	value: 1,
	roll: () => {
		this.value = getRandomInt(1, 6);
		return this.value;

	}
};

let dice2 = {
	value: 1,
	roll: () => {
		this.value = getRandomInt(1, 6);
		return this.value;

	}
};
