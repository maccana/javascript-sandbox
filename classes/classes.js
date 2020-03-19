// Example creating object instances from class function
var instance1 = new exampleClass(),
  instance2 = new exampleClass();

function exampleClass() {
  this.property1 = 5;
  this.property2 = "JS Class Example";
  this.method1 = function method1(arg1) {
    return arg1 + " " + this.property2;
  };
}

var user1 = {
  firstname: "Brian",
  lastname: "Wilson",
  age: 65,
  instrument: "Piano",
  getName: function() {
    return this.firstname + " " + this.lastname;
  }
};

// Reusable function to create a new User object
function User(firstname, lastname, instrument, age) {
  (this.firstname = firstname),
    (this.lastname = lastname),
    (this.instrument = instrument),
    (this.age = age),
    (this.getName = function() {
      return firstname + " " + lastname;
    });
}

// Create new object instances
var user2 = new User("Carlos", " Wilson", "Drums", "60");
var user3 = new User("Denis", " Wilson", "Keys", "57");

// Output to DOM
//alert(instance1.method1("Hello"));
document.write(
  "<p>exampleClass instance2 Property2 value = " +
    instance2.property1 +
    "</p><hr />"
);
// User1 display
document.write(
  "<h3>Example of user object with properties and methods</h3><p>user: " +
    user1.getName() +
    "<br>Instrument: " +
    user1.instrument +
    "<br>Age: " +
    user1.age +
    "</p><hr />"
);
// User2 display
document.write(
  "<h3>Example of user object enclosed in function</h3><p>user: " +
    user2.getName() +
    "<br>Instrument: " +
    user2.instrument +
    "<br>Age: " +
    user2.age +
    "</p><hr />"
);
// User3 display
document.write(
  "<h3>Example of user object enclosed in function</h3><p>user: " +
    user3.getName() +
    "<br>Instrument: " +
    user3.instrument +
    "<br>Age: " +
    user3.age +
    "</p>"
);
