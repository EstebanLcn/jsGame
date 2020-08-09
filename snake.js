const cvs = document.getElementById("snake");
const ctx = cvs.getContext("2d");

const box = 32;

const ground = new Image();
ground.src = "images/ground.png";

const foodImg = new Image();
foodImg.src = "images/apple.png";

let snake = [];
snake[0] = {
	x : 9* box,
	y : 10 * box
}
let food = {
		x : Math.floor(Math.random()*17+1) * box,
	y : Math.floor(Math.random()*15+3) * box
}

let score = 0;

function draw(){
		ctx.drawImage(ground,0,0);


}
let game = setInterval(draw,100);