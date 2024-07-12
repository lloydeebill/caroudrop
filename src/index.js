import "./style.css";
import { dropMenu } from "./drop-menu/dropMenu";
import imageOne from "./images/img-1.webp";
import imageTwo from "./images/img-2.webp";
import imageThree from "./images/img-3.webp";
import imageFour from "./images/img-4.webp";
import { Slide } from "./slideshow/slideshow";

document.addEventListener("DOMContentLoaded", () => {
  dropMenu();
});

document.querySelector(".img-1").src = imageOne;
document.querySelector(".img-2").src = imageTwo;
document.querySelector(".img-3").src = imageThree;
document.querySelector(".img-4").src = imageFour;

const slideshow = new Slide();

document
  .querySelector(".prev")
  .addEventListener("click", () => slideshow.plusSlides(-1));
document
  .querySelector(".next")
  .addEventListener("click", () => slideshow.plusSlides(1));

const dots = document.querySelectorAll(".dot");
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => slideshow.currentSlide(index + 1));
});
