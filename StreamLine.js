const CloseBTN = document.querySelector(".close-pop-up-btn")
const OpenBtn = document.querySelector(".pop-open-btn")



OpenBtn.addEventListener("click", function clickopen() {
  document.querySelector(".pop-up-container").classList.add("active");
});

CloseBTN.addEventListener("click", function clickclose() {
  document.querySelector(".pop-up-container").classList.remove("active");
});
