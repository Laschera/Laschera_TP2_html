function mostrarSeccion(id) {
  document.getElementById('pantalla-inicial').style.display = 'none';
  document.querySelectorAll('.seccion').forEach(seccion => {
    seccion.classList.add('oculto');
  });
  document.getElementById(id).classList.remove('oculto');

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

// Para esto tuve que usar IA porque no estaba seguro como hacerlo y estaba bastante cansado. Espero me perdones profe ☺
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
document.getElementById('btn-colores').addEventListener('click', () => {
  document.getElementById('color-panel').classList.toggle('oculto');
});

// Cambiar el color principal al hacer clic en una opción
document.querySelectorAll('.color-opcion').forEach(circulo => {
  circulo.addEventListener('click', () => {
    const color = circulo.getAttribute('data-color');
    document.documentElement.style.setProperty('--color-principal', color);
    localStorage.setItem('colorPrincipal', color); // Guardar
  });
});

// Aplicar color guardado al cargar la página
window.addEventListener('DOMContentLoaded', () => {
  const colorGuardado = localStorage.getItem('colorPrincipal');
  if (colorGuardado) {
    document.documentElement.style.setProperty('--color-principal', colorGuardado);
  }
});
