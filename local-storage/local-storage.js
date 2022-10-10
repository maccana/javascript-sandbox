(function () {
  if (typeof Storage !== "undefined") {
    // Code for localStorage/sessionStorage.
    console.log("Local Storage supported...");

    let dur = 5;
    let cnt = 0;
    let notes = [];
    let timer;
    const fileExt = "pic.jpg";

    notes.push("First note..");
    notes.push("New note...");
    notes.push("Another...");

    localStorage.setItem("lastname", "Smith");
    localStorage.setItem("notes", notes);

    // Retrieve
    document.getElementById("result").innerHTML = localStorage.getItem(
      "lastname"
    );
    document.getElementById("notes").innerHTML = localStorage.getItem(
      "notes"
    );

    function startTimer() {
      console.log("timer started ");
      timer = setInterval(doSomething, 2000);
    }

    function doSomething() {
      cnt += 1;
      const fileExtension = /\..*/;
      let newFile = fileExt.replace(fileExtension, "");
      console.log("F ext ", newFile);

      if (cnt === dur) {
        console.log("cnt ", cnt);
        stopTimer();
      }
      console.log("Current Loop Count: ", cnt);
    }

    function stopTimer() {
      clearInterval(timer);
      console.log("timer stopped ");
    }

    startTimer();
  } else {
    alert(
      "Sorry,your web browser does not support Local Storage.Please choose another brower to continue."
    );
  }
})();
