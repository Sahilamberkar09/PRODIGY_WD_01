const hamburger = document.querySelector(".hamburger");
const icon = document.querySelector(".hamburger i");
const navLinks = document.querySelector("ul");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("toggle_active");
  if (navLinks.classList.contains("toggle_active")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-times");
  } else {
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  }
});
