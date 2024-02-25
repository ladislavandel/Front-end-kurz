const menu = document.querySelector(".menu");
const burger = document.querySelector(".burger-menu");
const icon = document.querySelector(".fa-bars");

burger.addEventListener("click", () => {
  if (icon.classList[1] == "fa-bars") {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-x");
    menu.style.display = "block";
  } else {
    icon.classList.add("fa-bars");
    icon.classList.remove("fa-x");
    menu.style.display = "none";
  }
});

const toggle = document.querySelector(".darkmode-bg");
const toggleBtn = document.querySelector(".darkmode-btn");
// const header = document.querySelector(".header");
// const main = document.querySelector(".main");
const root = document.documentElement;

toggle.addEventListener("click", () => {
  toggle.classList.toggle("lightmode-bg");
  toggleBtn.classList.toggle("lightmode-btn");
  // header.classList.toggle("header-light");
  // main.classList.toggle("main-light");
  if (toggle.classList[1] == "lightmode-bg") {
    root.style.setProperty("--main-color", "#1C1C1BFF");
    root.style.setProperty("--second-color", "#696667FF");
    root.style.setProperty("--txt-color", "#FFFFFFFF");
    root.style.setProperty("--black-color", "#FFFFFFFF");
    root.style.setProperty("--weather-color-1", "#53331F");
    root.style.setProperty("--weather-color-2", "#CD8C8C");
  } else {
    root.style.setProperty("--main-color", "#da6857");
    root.style.setProperty("--second-color", "#fcedda");
    root.style.setProperty("--txt-color", "#083d77");
    root.style.setProperty("--black-color", "#000000");
    root.style.setProperty("--weather-color-1", "#5f4b8bff");
    root.style.setProperty("--weather-color-2", "#e69a8dff");
  }
});

const homeBtn = document.querySelector(".home-btn");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 1) {
    homeBtn.style.display = "block";
  } else {
    homeBtn.style.display = "none";
  }
});

homeBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
  });
});
