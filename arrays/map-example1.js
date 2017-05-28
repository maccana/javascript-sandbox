/* *
 * Using map method to return a new altered array without changing original array.
 */

var items = ["item1", "item2", "item3"];

var newItems = items.map(function(i) {
  if(i == "item3") { return "item6"; }
  else { return i; };
});

console.log(items);
console.log(newItems);