var oldArray = [1,2,3,4,5,6,7,8,9,10];

// Use filter to create a new array containing only values less than 6 from oldArray. 
var newArray = oldArray.filter(function(val){
  return val < 6;
});
