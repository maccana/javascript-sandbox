// We'd typically use a IIFE to make the first for loop work as
// excepted, but now we can simply use let in the block scope to
// bind the value of i during each iteration

const MAX = 5;

// Regular for loop cannot retain the value of 'i' on each iteration
for (var i = 0; i < MAX; i++) {
  setTimeout(function () {
    console.log(i); // output 5
  });
}

// Using IFFE in loop to create a closure to capture value of 'i' on each iteration
for (var i = 0; i < MAX; i++) {
  (function (i) {
    setTimeout(function () {
      console.log(i); // output 1,2,3,4,5
    });
  })(i);
}

// ES6 - using let can replace need for IFFE
for (let i = 0; i < MAX; i++) {
  setTimeout(function () {
    console.log(i); // output 1,2,3,4,5
  });
}
