function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
let dice = {
	value: getRandomInt(),
	roll: () => {
		this.value = getRandomInt(1, 6);
		return this.value;

	}
};

let dice2 = {
	value: getRandomInt(),
	roll: () => {
		this.value = getRandomInt(1, 6);
		return this.value;

	}
};
function printimage(image, image1){
	let containar = document.querySelector("#dice1");
	let containar1 = document.querySelector("#dice2");

	containar.style["background-image"]=`url(/images/inverted-dice-${image}.svg)`;
	containar1.style["background-image"]=`url(/images/inverted-dice-${image1}.svg)`;
}

let button = document.querySelector("#rolling-button");
button.addEventListener("click" , () => {
	dice.roll();
	dice2.roll();
	printimage(dice.roll() ,dice2.roll());

});
printimage(dice.value, dice2.value);
