function getLocalisation() {
	alert("hello");
		if(navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(localiser, error, 
			{timeout:10000, maximumAge:600000});
		} else {
			alert("no geo support in this browser");
		}
}

function localiser(position) {
		// vars for lat and long
		var latitude = position.coords.latitude;
		var latitude = position.coords.latitude;
		document.getElementById("latitude").innerHTML = latitude;
		document.getElementById("longitude").innerHTML = longitude;
}

// error handling
function error(error){
	switch(error.code) {
		case error.UNKNOWN_ERROR:
		alert("UNKNOWN_ERROR");
		break;
		case error.PERMISSION_DENIED:
		alert("Permission denied");
		break;
		case error.POSITION_UNAVAILABLE:
		alert("Position unavailable");
		break;
		case error.TIMEOUT:
		alert("Timeout");
		break;
	}
}