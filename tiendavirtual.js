const toggle = document.querySelector('.menu-toggle');

const navbar = document.querySelector('.generos');

toggle.addEventListener('click',() => {
    navbar.classList.toggle('active');
});
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextbtn = document.querySelector('.carousel-btn.next');
const prevbtn = document.querySelector('.carousel-btn.prev');

let currentIndex = 0;

function updateCarousel() {
    const slideWidth= slides[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

nextbtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
});

prevbtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();})