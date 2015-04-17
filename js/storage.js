/* Functions for storage1.html examples of local storage API */

function storage() {
	console.log("Storage function called...");
	var key = "Name";
	var value = document.getElementById("text-input").value;
	sessionStorage.setItem(key, value);
	console.log("Local storage successful!");
	console.log(key + ': ' + value);
	document.getElementById("output").innerHTML = 
	sessionStorage.getItem(key) + " Stored in Session";
	document.getElementById("text-input").value = "";
}
function deleteFromSessionStorage() {
	console.log("Name: " + sessionStorage.getItem("Name"));	
	sessionStorage.removeItem("Name");
	document.getElementById("output").innerHTML = "";
}
