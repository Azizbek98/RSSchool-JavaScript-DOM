const slides = document.querySelectorAll(".slider");
const dots = document.querySelectorAll(".dot");
const caption = document.querySelector(".content");

let slideIndex = 1;
let captionText = [
  "Magnificient scenery of the nature",
  "Tree above the stones",
  "Lake view between mountains",
  "Beautiful moment of sunset in the landscape",
  "Taking picture from above the mountains",
];

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";

  caption.innerHTML = `<h3 class="slider-caption">${
    captionText[slideIndex - 1]
  }</h3>`;
}

showSlides(slideIndex);
