'use strict';

/**
 * Guadahome - interactions
 */

/* Mobile navbar toggle */
const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");

const setNavOpen = (isOpen) => {
  navbar.classList.toggle("active", isOpen);
  navToggler.classList.toggle("active", isOpen);
  navToggler.setAttribute("aria-expanded", String(isOpen));
};

if (navbar && navToggler) {
  navToggler.addEventListener("click", () => {
    setNavOpen(!navbar.classList.contains("active"));
  });

  /* Close the menu after a link is chosen */
  navbar.addEventListener("click", (event) => {
    if (event.target.closest("a")) setNavOpen(false);
  });

  /* Close the menu with Escape */
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setNavOpen(false);
  });
}

/* Header background after scrolling */
const header = document.querySelector("[data-header]");

if (header) {
  const updateHeader = () => {
    header.classList.toggle("active", window.scrollY > 50);
  };

  window.addEventListener("scroll", updateHeader, { passive: true });
  updateHeader(); /* correct state if the page loads already scrolled */
}

/* Favourite buttons */
document.querySelectorAll("[data-toggle-btn]").forEach((button) => {
  button.setAttribute("aria-pressed", "false");

  button.addEventListener("click", () => {
    const isActive = button.classList.toggle("active");
    button.setAttribute("aria-pressed", String(isActive));
  });
});
