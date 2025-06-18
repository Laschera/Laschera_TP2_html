function mostrarSeccion(id) {
  document.getElementById('pantalla-inicial').style.display = 'none';
  document.querySelectorAll('.seccion').forEach(seccion => {
    seccion.classList.add('oculto');
  });
  document.getElementById(id).classList.remove('oculto');

  // Mostrar botón "Inicio" cuando no estemos en la pantalla principal
  const btnInicio = document.getElementById('btn-inicio');
  btnInicio.style.display = 'inline-block';

  // Mostrar el botón "Volver a trabajos" solo en galería o imagen ampliada
  const btnTrabajos = document.getElementById('volver-trabajos');
  if (id === 'trabajos-photoshop' || id === 'imagen-ampliada') {
    btnTrabajos.style.display = 'inline-block';
  } else {
    btnTrabajos.style.display = 'none';
  }
}

function volverInicio() {
  document.getElementById('pantalla-inicial').style.display = 'block';
  document.querySelectorAll('.seccion').forEach(seccion => {
    seccion.classList.add('oculto');
  });

  // Ocultar botón "Inicio" cuando estemos en la pantalla principal
  const btnInicio = document.getElementById('btn-inicio');
  btnInicio.style.display = 'none';

  // Ocultar también el botón "Volver a trabajos"
  const btnTrabajos = document.getElementById('volver-trabajos');
  btnTrabajos.style.display = 'none';
}

function toggleAcordeon(button) {
  const content = button.nextElementSibling;
  content.style.display = content.style.display === "block" ? "none" : "block";
}

function verImagen(ruta) {
  document.getElementById('imagen-grande-src').src = ruta;
  mostrarSeccion('imagen-ampliada');
}

// Alterna modo claro/oscuro
function toggleModo() {
  document.body.classList.toggle('oscuro');

  const esOscuro = document.body.classList.contains('oscuro');
  localStorage.setItem('modoOscuro', esOscuro ? 'true' : 'false');

  const botonModo = document.querySelector('#main-header button:last-child');
  botonModo.textContent = esOscuro ? '☀️' : '🌙';
}

// Para esto tuve que usar IA porque no estaba seguro como hacerlo y estaba bastante cansado, igual al final era fácil. Espero me perdones profe ☺
window.addEventListener('DOMContentLoaded', () => {
  const modoOscuroGuardado = localStorage.getItem('modoOscuro');
  const esOscuro = modoOscuroGuardado === 'true';

  if (esOscuro) {
    document.body.classList.add('oscuro');
    const botonModo = document.querySelector('#main-header button:last-child');
    botonModo.textContent = '☀️';
  }
});

// Mostrar/ocultar el panel de colores
document.addEventListener('DOMContentLoaded', () => {
  const btnColores = document.getElementById('btn-colores');
  const colorPanel = document.getElementById('color-panel');

  btnColores.addEventListener('click', (e) => {
    e.stopPropagation(); // Evita que el clic se propague al documento
    colorPanel.classList.toggle('oculto');
  });

  // Cerrar el panel cuando se hace clic fuera de él
  document.addEventListener('click', (e) => {
    if (!colorPanel.contains(e.target) && !btnColores.contains(e.target)) {
      colorPanel.classList.add('oculto');
    }
  });

  // Cambiar el color principal al hacer clic en una opción
  document.querySelectorAll('.color-opcion').forEach(circulo => {
    circulo.addEventListener('click', (e) => {
      e.stopPropagation(); // Evita que se cierre el panel inmediatamente
      const color = circulo.getAttribute('data-color');
      document.documentElement.style.setProperty('--color-principal', color);
      localStorage.setItem('colorPrincipal', color); // Guardar
    });
  });

  // Aplicar color guardado al cargar la página
  const colorGuardado = localStorage.getItem('colorPrincipal');
  if (colorGuardado) {
    document.documentElement.style.setProperty('--color-principal', colorGuardado);
  }
});

// Función para descargar el CV como PDF (IA)
document.getElementById('btn-descargar-pdf').addEventListener('click', () => {
  const cv = document.getElementById('cv');

  const opciones = {
    margin:       0.3,
    filename:     'mi_cv.pdf',
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2 },
    jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
  };

  html2pdf().set(opciones).from(cv).save();
});