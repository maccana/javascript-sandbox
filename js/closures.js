// closures.js
// Closure examples

console.log("We're ready to create a new cat :x");

// buildCat closure initializes private variables onload 
var buildCat = (function(catName, catColor){
	
	// local vars - protected from global scope clashes or access
	var catName = "lucy";
	var catColor = "white";
	var catCount = 0;
	
	// log default cat stats
	console.log(catName + " is the name and " + catColor + " is the color");
	console.log("cnt: " + catCount);

	// catFact only accessible via buildCat
	return function catFact(catName, catColor) {
		console.log(catName + " is the new cat's name");
		console.log(catColor + " is the new cat's color");
		// simple alert confirms new cat has been created
		alert("Hello " + catName);
		// closure structure means catCount is incremented each time catFact is run
		catCount++; 
		// log out cat no. to confirm increment is working!
		console.log("CatNo: " + catCount);
	}
	return catFact;
})();

// Button to access the function and member variables inside the closure
document.getElementById('cat').onclick = function() {
	
	var catName = document.getElementById("cat_name").value;
	var catColor = document.getElementById("cat_color").value;

	buildCat(catName, catColor);
	alert('Cat created successfully!');
	// return cat JSON object here and fire him off to the DB!

// closure structure for change name from default assignment
var nameChange = (function (name) {
    var name = "Mike";
		console.log("Default name: " + name);
    return function (name) { return name; }
})();

console.log("Name changed: " + nameChange("Charlie"));
console.log("Name changed: " + nameChange("Jenny"));
console.log("Name changed: " + nameChange("Steve"));


// add a counter here 
// http://www.w3schools.com/js/js_function_closures.asp
	
// Decrement player credits 	
// Refactor	
const players = [
  { name: 'Harry', creds: 3 },
  { name: 'Audrey', creds: 4 },
  { name: 'Lucy', creds: 2 }, 
]
let i 

const fn = () => {
  let plays = players[i].creds
  // console.log(`${players[2].creds}`)
  console.log('now ', i)
  console.log(`${players[i].name}`);

  return function spin() {
    players[i].creds -= 1
    if(players[i].creds == 0) { 
      console.log(`${players[i].name} is out of credits.`);
      return  
    }
    console.log(`${players[i].name} now has ${players[i].creds}`) 
  }
};
i = 2
const fun = fn()
fun()

