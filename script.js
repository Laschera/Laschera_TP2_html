function mostrarSeccion(id) {
  document.getElementById('pantalla-inicial').style.display = 'none';
  document.querySelectorAll('.seccion').forEach(seccion => {
    seccion.classList.add('oculto');
  });
  document.getElementById(id).classList.remove('oculto');
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
  const botonModo = document.querySelector('#main-header button:last-child');
  botonModo.textContent = document.body.classList.contains('oscuro') ? '☀️' : '🌙';
}

// Oculta/visibiliza botón "Proyectos" según la sección
function mostrarSeccion(id) {
  document.getElementById('pantalla-inicial').style.display = 'none';
  document.querySelectorAll('.seccion').forEach(seccion => {
    seccion.classList.add('oculto');
  });
  document.getElementById(id).classList.remove('oculto');

  const btnProyectos = document.getElementById('volver-proyectos');
  btnProyectos.style.display = (id === 'imagen-ampliada') ? 'inline-block' : 'none';
}

function volverInicio() {
  document.getElementById('pantalla-inicial').style.display = 'block';
  document.querySelectorAll('.seccion').forEach(seccion => {
    seccion.classList.add('oculto');
  });

  document.getElementById('volver-proyectos').style.display = 'none';
}
