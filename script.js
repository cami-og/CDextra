// Efecto simple: cambio de color en el header al hacer scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 100) {
    header.style.background = '#0077b6';
  } else {
    header.style.background = 'linear-gradient(90deg, #004aad, #00b4d8)';
  }
});
