let images = document.querySelectorAll(".pictures img");

for (let i = 0; i < images.length; i++) {
  images[i].addEventListener("mouseover", () => {
    images[i].style.scale = 1.2;
  });
}
for (let i = 0; i < images.length; i++) {
  images[i].addEventListener("mouseleave", () => {
    images[i].style.scale = 1;
  });
}
