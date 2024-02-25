const menuIcon = document.querySelector(".burger-menu");
const menuList = document.querySelector("nav");
const hamburgerMenu = document.querySelector(".fa-solid");

menuIcon.addEventListener("click", () => {
  if (hamburgerMenu.classList[1] === "fa-bars") {
    hamburgerMenu.classList.add("fa-xmark");
    hamburgerMenu.classList.remove("fa-bars");
    menuList.style.display = "block";
  } else {
    hamburgerMenu.classList.add("fa-bars");
    hamburgerMenu.classList.remove("fa-xmark");
    menuList.style.display = "none";
  }
});
