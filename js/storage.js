/* Functions for storage1.html examples of local storage API */

function storage() {
	console.log("Storage function called...");
	var key = "Name";
	var value = document.getElementById("text-input").value;
	sessionStorage.setItem(key, value);
	console.log("Local storage successful!");
	console.log(key + ': ' + value);
	document.getElementById("output").innerHTML = 
	sessionStorage.getItem("key");
	var value = document.getElementById("text-input").innerHTML = "";
}
