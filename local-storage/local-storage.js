(function() {
  if (typeof Storage !== "undefined") {
    // Code for localStorage/sessionStorage.
    console.log("Local Storage supported...");

    let dur = 5;
    let cnt = 0;
    let notes = [];
    let timer;
    notes.push("54");
    notes.push("32");

    const fileExt = "pic.jpg";

    let JSONreadyNotes = JSON.stringify(notes);

    // Sort
    localStorage.setItem("lastname", "Smith");
    localStorage.setItem("notes", notes);

    // Retrieve
    document.getElementById("result").innerHTML = localStorage.getItem(
      "lastname"
    );

    function startTimer() {
      console.log("timer started ");

      timer = setInterval(doSomething, 2000);
    }

    // Called by setInterval
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
