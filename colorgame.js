var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#messageDisplay");
var header = document.querySelector("h1");
var newColorsButton = document.querySelector("#newColorsButton");
var easyButton = document.getElementById("easyButton");
var hardButton = document.getElementById("hardButton");
var controlBar = document.getElementById("controlBar");

var qtdeSquares = 6;
var selectedColor;
var won = false;

init();

function init() {
	//ConfiguraÃ§Ã£o Inicial
	initialConfig(qtdeSquares);
	//SetUp Events
	setupEvents(qtdeSquares);
}

function setupEvents(num) {
	squaresClicks(num);
	newColorsButton.addEventListener("click", newColors);
	easyButton.addEventListener("click", easyMode);
	hardButton.addEventListener("click", hardMode);
}

function easyMode() {
	reset();
	qtdeSquares = 3;
	initialConfig();
	header.style.backgroundColor = "steelblue";
	easyButton.classList.add("selected");
	hardButton.classList.remove("selected");
}

function hardMode() {
	reset();
	qtdeSquares = 6;
	initialConfig();
	header.style.backgroundColor = "steelblue";
	easyButton.classList.remove("selected");
	hardButton.classList.add("selected");
}

function reset() {
	header.style.backgroundColor = "steelblue";
	won = false;
	messageDisplay.textContent = "";
	for (var i = 0; i < qtdeSquares; i++) {
		squares[i].style.backgroundColor = "#232323";
	}
}

function newColors(){
	reset();
	initialConfig();
}

function initialConfig() {
	// Color the Squeres
	colorSquares();
	//Choose the selected Color
	selectedColor = chooseSelectedColor();
	//Display the selected Color
	colorDisplay.textContent = selectedColor;
}

function squaresClicks() {
	for (var i = 0; i < qtdeSquares; i++) {
		squares[i].addEventListener("click", function() {
			if (!won) {
				if (this.style.backgroundColor === selectedColor) {
					messageDisplay.textContent = "You Won!";
					won = true;
					for (var i = 0; i < qtdeSquares; i++) {
						squares[i].style.backgroundColor = selectedColor;
					}
					header.style.backgroundColor = selectedColor;
				} else {
					messageDisplay.textContent = "Try Again";
					this.style.backgroundColor = "#232323";
				}
			}
		});
	}
}

function colorSquares() {
	for (var i = 0; i < qtdeSquares; i++) {
		squares[i].style.backgroundColor = rangonRGB();
	}
}

function chooseSelectedColor() {
	//select the color array index
	var i = Math.floor(Math.random() * qtdeSquares);
	//return the color in the selected index of the array
	return squares[i].style.backgroundColor;
}

function rangonRGB() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")"
}