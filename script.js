const mobileNavToggle = document.getElementById("mobileNavToggle");
const navLinks = document.querySelectorAll(".nav__link");

mobileNavToggle.addEventListener("click", () => {
  navLinks.forEach((navLink) => navLink.classList.toggle("show"));
});
