const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');
const slideWidth = carouselImages[0].clientWidth;
let counter = 0;

carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;

function slideNext() {
  if (counter === carouselImages.length - 1) return;
  counter++;
  carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;
}

function slidePrev() {
  if (counter === 0) return;
  counter--;
  carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;
}

nextButton.addEventListener('click', slideNext);
prevButton.addEventListener('click', slidePrev);
