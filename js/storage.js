function storage() {
	alert("storage");
	var key = "key";
	var value = document.getElementById("in").value;
	sessionStorage.setItem(key, value);
	document.getElementById("out").innerHTML = 
	sessionStorage.getItem("key");
	var value = document.getElementById("in").innerHTML = "";
}

function storage2() {
	 document.getElementById("out").innerHTML =
	 sessionStorage.getItem("key");
}