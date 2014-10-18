window.onload = function() {

	var canvas = document.getElementById('main'),canvastop = canvas.offsetTop,
	context = canvas.getContext('2d'), lastx, lasty;

	context.strokeStyle = "#00000";
	context.lineCap = 'round';
	context.lineJoin = 'round';
	context.lineWidth = 5;

function clear(){
	context.fillStyle = "#ffffff";
	context.rect(0, 0, 300, 300);
	context.fill();
}
function dot(x, y) {
	context.beginPath();
	context.fillStyle = "#000000";
	context.arc(x, y, 1, 0, MATH.PI*2, true);
	context.fill();
	context.stroke();
	context.path();

}
function line(fromx, fromy, tox, tox) {
	context.beginPath();
	context.moveTo(fromx, fromy);
	context.lineTo(tox, toy);
	context.stroke();
	context.closePath();

}
canvas.ontouchmove = function (event) {
	event.preventDefault();

	var newx = event.touches[0].clientx;
	var newy = event.touches[0].clienty - canvastop;

	line(lastx, lasty, newx, newy);

	lastx = newx;
	lasty = newy;
}

var clearButton =  document.getElementById('clear');
clearButton.onclick = clear;

clear();

}