function doFirst() {
	html5pic = document.getElementById("html5pic");
	html5pic.addEventListener("dragstart", startDrag, false);

	leftbox = document.getElementById("leftbox");
	// prevent defaults in various browsers to standardised UX
	leftbox.addEventListener("dragenter", function(e){e.preventDefault();}, false );
	leftbox.addEventListener("dragover", function(e){e.preventDefault();}, false);
	leftbox.addEventListener("drop", dropped , false);

}
function startDrag(e) {
	var code = '<img src="image/html5_logo.png" id="html5pic" width="50%">'
	e.dataTransfer.setData('Text', code);

}
function dropped(e) {
	console.log("hello");
	e.preventDefault();
	leftbox.innerHTML = e.dataTransfer.getData('Text');
}

window.addEventListener("load", doFirst, false);


