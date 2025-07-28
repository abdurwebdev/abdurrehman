const fullMenu = document.getElementById("full-menu");
const crossBar = document.getElementsByClassName("cross-bar")[0];
const hamMenu = document.getElementsByClassName("menu")[0];

crossBar.addEventListener("click", function () {
  fullMenu.style.transform = "translateX(-100%)";
});

hamMenu.addEventListener("click", function () {
  fullMenu.style.transform = "translateX(0%)";
});
