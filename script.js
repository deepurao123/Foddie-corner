// scripts.js
document.addEventListener("DOMContentLoaded", () => {
  const navbarToggler = document.getElementById("navbar-toggler");
  const navbarMenu = document.getElementById("navbar-menu");

  navbarToggler.addEventListener("click", () => {
    if (navbarMenu.style.display === "flex") {
      navbarMenu.style.display = "none";
    } else {
      navbarMenu.style.display = "flex";
    }
  });
});

document.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY >0) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
