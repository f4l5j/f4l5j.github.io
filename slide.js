const slide1 = document.querySelector(".slide1");
const slide1Button = document.querySelector(".slide1-btn");
slide1Button.addEventListener("click", () => {
  slide1.classList.remove("active");
  localStorage.setItem("slide1Displayed", "true");
});
setTimeout(() => {
  if (!localStorage.getItem("slide1Displayed")) {
    slide1.classList.add("active");
  }
}, 300);

const slide2 = document.querySelector(".slide2");
const slide2Button = document.querySelector(".slide2-btn");
slide2Button.addEventListener("click", () => {
  slide2.classList.remove("active");
  localStorage.setItem("slide2Displayed", "true");
});
setTimeout(() => {
  if (!localStorage.getItem("slide2Displayed")) {
    slide2.classList.add("active");
  }
}, 300);

const slide3 = document.querySelector(".slide3");
const slide3Button = document.querySelector(".slide3-btn");
slide3Button.addEventListener("click", () => {
  slide3.classList.remove("active");
  localStorage.setItem("slide3Displayed", "true");
});
setTimeout(() => {
  if (!localStorage.getItem("slide3Displayed")) {
    slide3.classList.add("active");
  }
}, 300);