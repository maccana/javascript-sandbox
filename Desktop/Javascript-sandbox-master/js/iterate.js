/* Javascript for iterate.html - 16 Stepster */

function toggleClass(el) {
	var boxes = document.getElementById('boxes').children;
	// var lastBox = document.getElementById('boxes').lastChild;

	// Base pitch value - to be set by user dynamically via GUI
	var pitchValue = 30;
	for(var i = 0; i < boxes.length; i++) {
		boxes[i].className = "test";
		boxes[i].setAttribute("value", pitchValue);
		console.log(pitchValue);
		pitchValue = pitchValue * 1.4;
	}
	el.className = "selected test"; 

}








