const menuToggle = document.querySelector(".menu-toggle");
const navList = document.querySelector(".nav-list");
const navLinks = document.querySelectorAll(".nav-list a");
const revealSections = document.querySelectorAll(".reveal");
const yearEl = document.getElementById("year");

if (menuToggle && navList) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navList.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navList.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 }
);

revealSections.forEach((section) => observer.observe(section));

if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}
