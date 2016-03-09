html5pic = document.getElementById("html5pic");

function doFirst() {
	html5pic.addEventListener("dragstart", startDrag, false);

	leftbox = document.getElementById("leftbox");
	// prevent defaults in various browsers to standardised UX
	leftbox.addEventListener("dragenter", function(e){e.preventDefault();}, false );
	leftbox.addEventListener("dragover", function(e){e.preventDefault();}, false);
	leftbox.addEventListener("drop", dropped , false);

}
function startDrag(e) {
	var code = '<img src="image/html5_logo.png" id="html5pic_transfered" width="50%">'
	e.dataTransfer.setData('Text', code);

}
function dropped(e) {
	console.log("Item dropped on dropzone.");
	console.log("Event Data", e.dataTransfer.files);
	e.preventDefault();
	leftbox.innerHTML = e.dataTransfer.getData('Text');
	// Rmove original image element from DOM by it's id
	html5pic.parentNode.removeChild(html5pic);
}

window.addEventListener("load", doFirst, false);
