document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header");
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector("nav ul");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      header.classList.add("nav-scrolled");
    } else {
      header.classList.remove("nav-scrolled");
    }
  });

  hamburger.addEventListener("click", function () {
    navMenu.classList.toggle("toggle_active");
  });
});
