'use strict';
const slides = Array.from(document.querySelectorAll('.item'));
const dots = Array.from(document.querySelectorAll('[data-slide]'));
const names = ['Morango', 'Abacate', 'Laranja'];
let active = 0;
function showSlide(index) {
  active = (index + slides.length) % slides.length;
  slides.forEach((slide, i) => {
    slide.hidden = i !== active;
    slide.classList.toggle('active', i === active);
  });
  dots.forEach((dot, i) => dot.setAttribute('aria-current', String(i === active)));
  document.querySelector('#counter').textContent = `${String(active + 1).padStart(2, '0')} / ${String(slides.length).padStart(2, '0')}`;
  document.querySelector('#slide-status').textContent = `Sabor ${names[active]}, ${active + 1} de ${slides.length}`;
}
document.querySelector('#next').addEventListener('click', () => showSlide(active + 1));
document.querySelector('#prev').addEventListener('click', () => showSlide(active - 1));
dots.forEach(dot => dot.addEventListener('click', () => showSlide(Number(dot.dataset.slide))));
document.querySelector('main').addEventListener('keydown', event => {
  if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;
  event.preventDefault();
  showSlide(active + (event.key === 'ArrowRight' ? 1 : -1));
});
