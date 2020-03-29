(function() {
  if (typeof Storage !== "undefined") {
    // Code for localStorage/sessionStorage.
    console.log("Local Storage supported...");
  } else {
    alert(
      "Sorry.Your web browser does not support Local Storage.Please choose another brower to continue."
    );
  }
})();
