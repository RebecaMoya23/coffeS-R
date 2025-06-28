function mostrarDetalle(id) {
  // Oculta todas las secciones dentro de <main>
  const secciones = document.querySelectorAll('main > section');
  secciones.forEach(seccion => {
    seccion.style.display = 'none';
  });

  // Muestra solo la sección con el ID recibido
  const activa = document.getElementById(id);
  if (activa) {
    activa.style.display = 'block';
  }
}
let indice = 0;

function iniciarCarrusel() {
  const slides = document.querySelectorAll('.slide');
  if (slides.length === 0) return; // Si no hay imágenes, salí

  function mostrarSiguienteSlide() {
    slides[indice].classList.remove('active');
    indice = (indice + 1) % slides.length;
    slides[indice].classList.add('active');
  }

  setInterval(mostrarSiguienteSlide, 4000);
}

document.addEventListener("DOMContentLoaded", function () {
  iniciarCarrusel();
});





