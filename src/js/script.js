// Navbar  fixed
window.onscroll = () => {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector("#to-top");

  if (window.scrollY > fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.replace("hidden", "flex");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.replace("flex", "hidden");
  }
};

// Hamburger Menu
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

window.addEventListener("click", (e) => {
  if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

// toggle dark
const toggleDark = document.querySelector("#toggle-dark");
const innerToggleDark = document.querySelector("#inner-toggle-dark");
const html = document.querySelector("html");

toggleDark.addEventListener("click", () => {
  if (toggleDark.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});

// toggle position
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  toggleDark.checked = true;
} else {
  toggleDark.checked = false;
}