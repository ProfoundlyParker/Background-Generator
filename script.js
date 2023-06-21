//Added ES6 syntax & random color generator
const css = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("gradient");
const randomButton = document.getElementById("random");

setGradient = () => {
	body.style.background = linearGradient();
	css.textContent = `${body.style.background};`;
}


linearGradient = () => {
	return `linear-gradient(to right, ${color1.value}, ${color2.value})`;
}

getRandomColors = () => {
	let letters = '0123456789ABCDEF';
	let color = '#';
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

randomColors = () => {
	color1.value = getRandomColors();
	color2.value = getRandomColors();
	setGradient();
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

randomButton.addEventListener("click", randomColors);


