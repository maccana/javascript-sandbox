// closures.js
// Closure examples

console.log("We're ready to create a new cat :D");

// Closure 
function buildCat(){
	var catName = 'Orson';
	var catColor = 'Grey and White';

	function catFact() {
		console.log(catName + " is the new cat's name");
		console.log(catColor + " is the new cat's color");
		alert("Hello " + catName);


	}
	return catFact;
}
// Button to access the function and member variables inside the closure
document.getElementById('cat').onclick = function() {

	var newCat = buildCat();
	newCat();
	alert('Cat created successfully!');
	// Fire him off to the DB here!
}