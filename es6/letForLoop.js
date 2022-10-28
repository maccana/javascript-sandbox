// Typically we use a IIFE to make the first for loop work as
// excepted, but now we can simply use let in the block scope to
// bind the value of i during each iteration

const MAX = 5;

// Regular for loop cannot retain the value of 'i' on each iteration
for (var i = 0; i < MAX; i++) {
  console.log(i); // output 5
}

// Using IFFE in loop to create a closure and pass 
// the value of 'i'  to setTimeout on each iteration
for (var i = 0; i < MAX; i++) {
  (function (i) {
    setTimeout(function () {
      console.log(i); // output 0,1,2,3,4
    });
  })(i);
}

// ES6 - using 'let' replaces need for IFFE
for (let i = 0; i < MAX; i++) {
  setTimeout(function () {
    console.log(i); // output 0,1,2,3,4
  });
}

function prnt2(i) {
  (function (i) {
    if (i === 5) {
      timer.clearInterval();
    }
    let timer = setInterval(function () {
      i++;
      console.log(i);
    }, 5000);
  })(i);
}

function start() {
  for (let i = 0; i < MAX; i++) {
    prnt2(i);
  }
}

start();
