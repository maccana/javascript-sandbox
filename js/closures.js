// closures.js
// Closure examples

console.log("We're ready to create a new cat :D");

// Closure 
function buildCat(catName, catColor){
console.log(catName + " is the name and " + catColor + " is the color");
	var catName = catName;
	var catColor = catColor;

	function catFact() {
		console.log(catName + " is the new cat's name");
		console.log(catColor + " is the new cat's color");
		alert("Hello " +catName);


	}
	return catFact;
}
// Button to access the function and member variables inside the closure
document.getElementById('cat').onclick = function() {

	var newCat = buildCat("Orson","Grey");
	newCat();
	alert('Cat created successfully!');
	// Fire him off to the DB here!
}
