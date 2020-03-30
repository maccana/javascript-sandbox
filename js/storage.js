/* Functions for storage1.html examples of local storage API */

function storage() {
  console.log("Storage function called...");
  var key = "Name";
  var value = document.getElementById("text-input").value;
  sessionStorage.setItem(key, value);
  console.log("Local storage successful!");
  console.log(key + ": " + value);
  document.getElementById("output").innerHTML =
    sessionStorage.getItem(key) +
    "<span class='success'>" +
    " has been successfully stored in this browser Session" +
    "</span>";
  var box = document.getElementById("box");
  box.style.display = "block";

  sessionStorage.getItem(key) + " has been stored in Session";
  document.getElementById("text-input").value = "";
}
function deleteFromSessionStorage() {
  console.log("Name: " + sessionStorage.getItem("Name"));
  var value = sessionStorage.getItem("Name");
  sessionStorage.removeItem("Name");
  document.getElementById("output").innerHTML = "";
  document.getElementById("output").innerHTML =
    value +
    "<span class='success'>" +
    " has been successfully removed from Session" +
    "</span>";
}
