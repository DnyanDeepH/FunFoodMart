// Hamburger menu toggle
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  toggleHamburger();
});

function toggleHamburger() {
  hamburger.classList.toggle("active");
  const spans = hamburger.querySelectorAll("span");
  if (hamburger.classList.contains("active")) {
    spans[0].style.transform = "rotate(-45deg) translate(-5px, 6px)";
    spans[1].style.opacity = "0";
    spans[2].style.transform = "rotate(45deg) translate(-5px, -6px)";
  } else {
    spans[0].style.transform = "none";
    spans[1].style.opacity = "1";
    spans[2].style.transform = "none";
  }
}

// Add scroll effect to navbar
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 100) {
    navbar.style.background = "rgba(255, 255, 255, 0.2)";
    navbar.style.backdropFilter = "blur(15px)";
    navbar.style.webkitBackdropFilter = "blur(15px)";
  } else {
    navbar.style.background = "rgba(255, 255, 255, 0.1)";
    navbar.style.backdropFilter = "blur(10px)";
    navbar.style.webkitBackdropFilter = "blur(10px)";
  }
});
