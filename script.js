const menuBtn = document.querySelector(".bi-list");
const closeMenu = document.querySelector(".bi-x-lg");
const menu = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
  menu.classList.add("active");
});
closeMenu.addEventListener("click", () => {
  menu.classList.remove("active");
});
