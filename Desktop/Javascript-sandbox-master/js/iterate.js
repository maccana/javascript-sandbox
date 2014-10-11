/* Javascript for iterate.html - 16 Stepster */

/* This snippet builds and iterates over an array of the child elements inside the 'boxes' 
parent div.
It appends the base class name 'test' to each element and adds the selected class to the
currently selected element. This allows CSS styling to be changed dynamically.
The first element defaults to selected which is replaced with test when another element is 
clicked.
*/

function toggleClass(el) {
	var boxes = document.getElementById('boxes').children;
	// var lastBox = document.getElementById('boxes').lastChild;

	for(var i = 0; i < boxes.length; i++) {

		boxes[i].className = "test";
	}
	el.className = "selected test"; 
}
