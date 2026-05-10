/*
const toggleButton = document.querySelector(".menu-toggle");
const navbarLinks = document.querySelector("#nav-links");

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
  const isActive = navbarLinks.classList.contains("active");
  toggleButton.setAttribute("aria-expanded", isActive);
});
*/

document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.querySelector('.menu-toggle');
  const navbarLinks = document.querySelector('#nav-links');
  if (!toggleButton || !navbarLinks) return;
  toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
    const isOpen = navbarLinks.classList.contains('active');
    toggleButton.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
});