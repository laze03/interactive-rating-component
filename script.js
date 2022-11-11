"use strict";
let selectedNum;
const btns = document.querySelectorAll(".number");

const click = function () {
  if (selectedNum != undefined) {
    btns[selectedNum - 1].classList.remove("clicked");
  }
  selectedNum = this.textContent;
  this.classList.add("clicked");
};

for (let i = 0; i < 5; i++) {
  btns[i].addEventListener("click", click);
}

document.querySelector(".submit").addEventListener("click", function () {
  if (selectedNum != undefined) {
    document.querySelector(".rating").classList.add("hidden");
    document.querySelector("span").textContent = selectedNum;
    document.querySelector(".thank-you").classList.remove("hidden");
  }
});
