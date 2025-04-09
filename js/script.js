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
