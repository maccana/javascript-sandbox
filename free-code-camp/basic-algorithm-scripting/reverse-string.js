function reverseString(str) {
  var reverseStr = str.split("").reverse().join("");
  return reverseStr;
}

reverseString("hello");
reverseString("howdy");