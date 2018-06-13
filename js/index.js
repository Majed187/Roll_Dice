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
function printimage(image, image1){
	let containar = document.querySelector("#dice1");
	let containar1 = document.querySelector("#dice2");

	containar.style["background-image"]=`url(/images/inverted-dice-${image}.svg)`;
	containar1.style["background-image"]=`url(/images/inverted-dice-${image1}.svg)`;
}

let button = document.querySelector("#rolling-button");
button.addEventListener("click" , () => {
	let result = dice.roll();
	let result2 = dice2.roll();
	printimage(result, result2);

});
printimage(dice.value, dice2.value);
