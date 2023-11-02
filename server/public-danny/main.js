const resourceBtn = document.querySelector(".submit-resource-button");
const form = document.getElementById("newRes");
const main = document.getElementById("main");
const bodyLinks = document.getElementsByClassName("body-link");

function files() {
  resourceBtn.classList.toggle("rotate-and-hide");
  form.classList.toggle("formShow");
  main.classList.toggle("fade");

  for (let i = 0; i < bodyLinks.length; i++) {
    bodyLinks[i].classList.toggle("inactive-link");
  }
}
