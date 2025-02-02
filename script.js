const hamburgerMenu = document.getElementById("hamburger-menu");
const socials = document.getElementById("socials");
const navList = document.getElementById("nav-list");
let menuShow = false;

hamburgerMenu.addEventListener("click", () => {
  if (menuShow) {
    socials.style.display = "none";
    navList.style.display = "none";
  } else {
    socials.style.display = "block";
    navList.style.display = "block";
  }
  menuShow = !menuShow;
});
