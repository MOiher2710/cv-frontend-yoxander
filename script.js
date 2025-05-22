// Scroll suave al hacer clic en los enlaces del menú
document.querySelectorAll('nav a').forEach(enlace => {
  enlace.addEventListener('click', function (e) {
    e.preventDefault();
    const seccion = document.querySelector(this.getAttribute('href'));
    if (seccion) {
      seccion.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Animación de entrada con IntersectionObserver
const faders = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2
});

faders.forEach(el => observer.observe(el));
