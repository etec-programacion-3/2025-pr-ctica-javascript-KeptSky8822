// Referencia al contenedor principal de la SPA
const app = document.getElementById('app');



// Definición de rutas y sus vistas asociadas (incluye detalle dinámico)
const routes = {
  '/': () => '<h1>Inicio</h1><p>Bienvenido a la SPA.</p>',
  '/productos': () => `
    <h1>Productos</h1>
    <ul>
      <li><a href="/producto/1" data-link>Producto 1</a></li>
      <li><a href="/producto/2" data-link>Producto 2</a></li>
    </ul>
  `,
  '/contacto': () => '<h1>Contacto</h1><p>Formulario de contacto aquí.</p>'
};

// ...existing code...
// Renderiza la vista correspondiente a la ruta actual
function render(route) {
  // Vista de detalle dinámica: /producto/:id
  const detalleMatch = route.match(/^\/producto\/(\d+)$/);
  if (detalleMatch) {
    const id = detalleMatch[1];
    app.innerHTML = `<h1>Detalle de producto</h1><p>Mostrando producto con ID: ${id}</p><button id="volver">Volver a productos</button>`;
    document.getElementById('volver').onclick = () => navigate('/productos');
    return;
  }
  app.innerHTML = routes[route] ? routes[route]() : '<h1>404</h1><p>Página no encontrada.</p>';
}

// Cambia la ruta usando history.pushState y renderiza la nueva vista
function navigate(route) {
  window.history.pushState({}, '', route);
  render(route);
}

// Maneja los clics en la navegación para cambiar de vista sin recargar
document.querySelector('nav').addEventListener('click', e => {
  if (e.target.matches('button[data-route]')) {
    navigate(e.target.dataset.route);
  }
});

// Maneja los clics en enlaces internos (detalle)
document.addEventListener('click', e => {
  if (e.target.matches('a[data-link]')) {
    e.preventDefault();
    navigate(e.target.getAttribute('href'));
  }
});

// Maneja el evento popstate para soportar navegación con los botones del navegador
window.addEventListener('popstate', () => {
  render(window.location.pathname);
});

// Render inicial según la ruta actual
render(window.location.pathname);