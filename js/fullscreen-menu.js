const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector(".fullscreen-menu");
const exitBtn = menu.querySelector(".fullscreen-menu__exit");

hamburger.addEventListener("click", e => {
  e.preventDefault();
  menu.classList.add("active");
});

exitBtn.addEventListener("click", e => {
  e.preventDefault();
  menu.classList.remove("active");
})