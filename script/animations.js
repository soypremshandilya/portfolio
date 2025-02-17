// Function to add a fade-in effect
const fadeInElements = () => {
  const elements = document.querySelectorAll('.fade-in');

  elements.forEach((element) => {
      const position = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (position < windowHeight - 50) {
          element.classList.add('visible');
      }
  });
};

// Function to add a slide-up effect
const slideUpElements = () => {
  const elements = document.querySelectorAll('.slide-up');

  elements.forEach((element) => {
      const position = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (position < windowHeight - 50) {
          element.classList.add('visible');
      }
  });
};

// Function to add animation triggers on scroll
const animateOnScroll = () => {
  window.addEventListener('scroll', () => {
      fadeInElements();
      slideUpElements();
  });
};

// Initializing animations on page load
document.addEventListener('DOMContentLoaded', () => {
  fadeInElements();
  slideUpElements();
  animateOnScroll();
});
