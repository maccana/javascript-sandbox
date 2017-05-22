// Car constructor
var Car = function() {
  // Private variable
  var speed = 10;

  // Public methods
  this.accelerate = function(change) {
    speed += change;
  };

  this.decelerate = function() {
    speed -= 5;
  };

  this.getSpeed = function() {
    return speed;
  };

  
};

// Bike constructor
var Bike = function() {

  // Private variable
  var gear;

  // Public functions
  this.getGear = function() {
    return gear;
  };
  
  this.setGear = function(change) {
    gear = change;
  };

};

// Instantiate new Car
var myCar = new Car();

// Instantiate new Bike
var myBike = new Bike();

// Use Bike constructor public functions to alter instance properties
myBike.setGear(4);
myBike.getGear();
myBike.setGear(3);
myBike.getGear();
myBike.setGear(1);
myBike.getGear();