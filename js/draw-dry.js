// Beginning Building Web Applications in the Cloud starter draw to screen app - p.31
// DRY optomised version of JS - see draw.js for non-optomised version

window.onload = function() {

	document.ontouchmove = function(e) { e.preventDefault(); }
	
	var draw = {
		fill: "#000000",
		stroke: "#000000",
		clear: "#ffffff",
		size: 5,
		cap: 'round',
		join: 'round',
		width: 300,
		height: 300 
	}

	var canvas = document.getElementById('main');
	var canvastop = canvas.offsetTop;
	var context = canvas.getContext('2d');

	var lastx; 
	var lasty;

	function clear() {
		context.fillStyle = draw.clear; 
		context.rect(0, 0, draw.width, draw.height); 
		context.fill();
	}

	// The 
	function path( moves ) { 
		context.beginPath(); 
		context.strokeStyle = draw.stroke; 
		context.fillStyle = draw.fill; 
		context.lineCap = draw.cap; 
		context.lineJoin = draw.join; 
		context.lineWidth = draw.size;

		moves()

		context.fill(); 
		context.stroke(); 
		context.closePath();
	}
	// Dot calls path passing the callback
	function dot(x,y) { 
		path(function(){
		context.arc(x,y,1,0,Math.PI*2,true); 
		});
	}

	// Line calls path passing callback with properties to draw line
	function line(fromx,fromy, tox,toy) { 
		path(function(){
		context.moveTo(fromx, fromy);
		context.lineTo(tox, toy); });
	}

	function position(event,action) { 
		event.preventDefault();
		var newx = event.touches[0].clientX;
		var newy = event.touches[0].clientY - canvastop;

		action(lastx,lasty, newx,newy)
		
		lastx = newx;
		lasty = newy; 
	}
	// For touch the position function is called where x,y of the touch are saved to the 
	// newx & newy vars. These coords are then passed to dot function dot function
	canvas.ontouchstart = function(event){ 
		position(event,function(lastx,lasty, newx,newy){
			dot(newx,newy); 
		})
	}

	// Ontouch passes event to position which continuously updates the x,y positions
	// through the action callback function 
	canvas.ontouchmove = function(event){ 
		position(event,function(lastx,lasty, newx,newy){
			line(lastx,lasty, newx,newy); 
		})
	}

	var clearButton = document.getElementById("clear"); 
	clearButton.onclick = clear;
	clear();

}
	
	var changeColor = function() {
		alert('hi');
		draw.stroke = "red";
		draw.fill = "red";
	}

