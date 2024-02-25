const input = document.querySelectorAll(".input-info");
const text = document.querySelector(".textarea");
const form = document.querySelector(".form");
const messageError = document.querySelectorAll(".error-message");
const regex = /^([a-zA-Z0-9\._]+)@([a-z]+).([a-z])/g;
form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (input[0].value == "" || input[1].value == "" || text.value == "") {
    messageError[0].style.display = "block";
  } else {
    messageError[0].style.display = "none";
  }

  if (input[0].value != input[1].value) {
    messageError[1].style.display = "block";
  } else {
    messageError[1].style.display = "none";
  }

  if (input[0].value.match(regex)) {
    messageError[2].style.display = "none";
  } else {
    messageError[2].style.display = "block";
  }
});
