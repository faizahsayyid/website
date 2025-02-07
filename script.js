const hamburgerMenu = document.getElementById("hamburger-menu");
const socials = document.getElementById("socials");
const navList = document.getElementById("nav-list");
let menuShow = false;

hamburgerMenu.addEventListener("click", () => {
  if (menuShow) {
    socials.style.display = "none";
    navList.style.display = "none";
  } else {
    socials.style.display = "flex";
    navList.style.display = "block";
  }
  menuShow = !menuShow;
});

function activeNavItemBasedOnScroll() {
  const navItems = navList.querySelectorAll(".nav-item");
  const sections = [];
  const homeItem = navList.querySelector('.nav-item[href="/website/"]'); // Home link
  const firstSection = document.querySelector("#hacks"); // First scrollable section

  // Map nav items with section IDs
  navItems.forEach((item) => {
    const href = item.getAttribute("href");
    if (href.startsWith("#")) {
      const section = document.querySelector(href);
      if (section) {
        sections.push({ item, section });
      }
    }
  });

  function updateActiveNav() {
    let scrollPosition = window.scrollY + window.innerHeight * 0.2; // Adjust activation threshold

    let activeItem = homeItem; // Default to Home

    if (firstSection && window.scrollY >= firstSection.offsetTop - 200) {
      sections.forEach(({ item, section }) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          activeItem = item;
        }
      });
    }

    // Remove 'active' class from all and add to the current section
    navItems.forEach((item) => item.classList.remove("active"));
    if (activeItem) {
      activeItem.classList.add("active");
    }
  }

  // Run on scroll and on load
  window.addEventListener("scroll", updateActiveNav);
  updateActiveNav();
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", activeNavItemBasedOnScroll);
