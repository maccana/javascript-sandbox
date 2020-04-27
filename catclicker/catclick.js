window.onload = function (e) {
  let cat1 = document.getElementById("cat1");
  let cat2 = document.getElementById("cat2");
  let detail = document.getElementById("detail").children[0];
  let clearBtn = document.getElementById("clear-selection");

  let cats = [{ name: "Fluffy" }, { name: "Mesmer" }];

  // Clearing function
  let clearSelection = function () {
    detail.innerHTML = "No cat selected...";
  };

  clearBtn.addEventListener("click", clearSelection, false);

  // Get ref to all elements with class
  let catcards = document.querySelectorAll(".catcard");

  // Get cat details
  let getCatDetail = function () {
    let catDetail;

    if (this.id === "cat1") {
      catDetail = cats[0].name;
      detail.innerHTML = catDetail;
    } else if (this.id === "cat2") {
      catDetail = cats[1].name;
      detail.innerHTML = catDetail;
    }
  };

  for (let i = 0; i < catcards.length; i++) {
    catcards[i].addEventListener("click", getCatDetail, false);
  }
};
