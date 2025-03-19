"use strict";

const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const carrosselContainer = document.querySelector(".carrossel-container");

let index = 0;
const slides = document.querySelectorAll(".carrossel-slide");
const totalSlides = slides.length;
console.log(slides);
console.log(totalSlides);

function updateCarrossel() {
  const slideWidth = slides[0].clientWidth;
  carrosselContainer.style.transform = `translateX(${-index * slideWidth}px)`;
}

nextButton.addEventListener("click", () => {
  index = (index + 1) % totalSlides;
  updateCarrossel();
});

prevButton.addEventListener("click", () => {
  index = (index - 1 + totalSlides) % totalSlides;
  updateCarrossel();
});

setInterval(() => {
  index = (index + 1) % totalSlides;
  updateCarrossel();
}, 5000);
