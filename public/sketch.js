// THE CLIENT
let socket;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(51);

	// open the connection to the server
	socket = io();
	// recieve new information from server
	socket.on('mouse', newDrawing);
}

// draw the incoming data
function newDrawing(data){
	noStroke();
	fill(0, 0, 255);
	ellipse(data.x, data.y, 59, 50)
}

// draw data that also goes out
function mouseDragged(){
	console.log(mouseX, mouseY);

	let data = {
		x: mouseX, 
		y: mouseY
	}
	// send from client to server
	socket.emit('mouse', data);

	noStroke();
	fill(255, 0, 0);
	ellipse(mouseX, mouseY, 50, 50);


}

function draw() {
}