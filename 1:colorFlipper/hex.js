const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function() {
	randomColorCode = getRandomCode();
	console.log(randomColorCode);
	document.body.style.backgroundColor = randomColorCode;
	color.textContent = randomColorCode;
});
function getRandomCode() {
	var code = "#";
	for (let i = 0; i < 6; i++){
		index = Math.floor(Math.random() * hex.length);
		code += hex[index];
	}
	return code;
}