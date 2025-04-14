const navToggle = document.querySelector('[aria-controls="primary-nav"]');
const primaryNav = document.querySelector("#primary-nav");

navToggle.addEventListener("click", () => {
  // const navOpened = navToggle.getAttribute('aria-expanded');
  // if(navOpened === 'false')
  //     navToggle.setAttribute("aria-expanded", "true");
  // else
  //     navToggle.setAttribute("aria-expanded", "false");

  // const isNavOpened = navToggle.getAttribute("aria-expanded") === "true";
  // navToggle.setAttribute("aria-expanded", String(!isNavOpened));

  navToggle.setAttribute(
    "aria-expanded",
    navToggle.getAttribute("aria-expanded") === "true" ? "false" : "true"
  );
});

// Close nav if click outside
document.addEventListener("click", (e) => {
  const isClickInsideToggle = navToggle.contains(e.target);
  const isClickInsideNav = primaryNav.contains(e.target);

  if (!isClickInsideToggle && !isClickInsideNav) {
    navToggle.setAttribute("aria-expanded", "false");
  }
});

// Close nav when a link inside the nav is clicked
const navLinks = primaryNav.querySelectorAll("a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navToggle.setAttribute("aria-expanded", "false");
  });
});