function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Reveal Animations
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(".reveal").forEach((el) => {
  revealObserver.observe(el);
});

// Project Slider Logic
let currentSlide = 0;
function moveSlider(direction) {
  const slider = document.getElementById("project-slider");
  const slides = slider.children;
  const slideWidth = slides[0].offsetWidth + 32; // width + gap
  const maxSlides = slides.length - getVisibleSlides();

  currentSlide += direction;

  if (currentSlide < 0) currentSlide = 0;
  if (currentSlide > maxSlides) currentSlide = maxSlides;

  slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

function getVisibleSlides() {
  if (window.innerWidth <= 768) return 1;
  if (window.innerWidth <= 1200) return 2;
  return 3;
}

// Reset slider on resize to prevent layout breaking
window.addEventListener('resize', () => {
  currentSlide = 0;
  document.getElementById("project-slider").style.transform = `translateX(0)`;
});
