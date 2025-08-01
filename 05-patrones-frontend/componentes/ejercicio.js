// Componente Tarjeta: genera un elemento visual para mostrar información
export function Tarjeta({ titulo, contenido }) {
  const div = document.createElement('div');
  div.className = 'tarjeta';
  div.innerHTML = `<h2>${titulo}</h2><p>${contenido}</p>`;
  return div;
}

// EJERCICIO: Completa el componente Formulario para que sea reutilizable
export function Formulario({ onSubmit }) {
  // Crear elementos
  const form = document.createElement('form');

  const inputTitulo = document.createElement('input');
  inputTitulo.type = 'text';
  inputTitulo.placeholder = 'Título';
  inputTitulo.name = 'titulo';
  inputTitulo.required = true;

  const inputContenido = document.createElement('textarea');
  inputContenido.placeholder = 'Contenido';
  inputContenido.name = 'contenido';
  inputContenido.required = true;

  const btnEnviar = document.createElement('button');
  btnEnviar.type = 'submit';
  btnEnviar.textContent = 'Agregar';

  // Agregar elementos al form
  form.appendChild(inputTitulo);
  form.appendChild(inputContenido);
  form.appendChild(btnEnviar);

  // Manejar el envío
  form.addEventListener('submit', e => {
    e.preventDefault();
    const dato = {
      titulo: inputTitulo.value.trim(),
      contenido: inputContenido.value.trim(),
    };
    if (dato.titulo && dato.contenido) {
      onSubmit(dato);
      form.reset(); // Limpia el formulario
    }
  });

  return form;
}


// Montaje de componentes en la página
const app = document.getElementById('app');

// EJERCICIO: Crea una función mostrarTarjeta que reciba un dato y agregue una tarjeta al DOM
function mostrarTarjeta(dato) {
  const tarjeta = Tarjeta(dato);
  app.appendChild(tarjeta);
}

// EJERCICIO: Monta el formulario en la página y pásale la función mostrarTarjeta como callback
app.appendChild(Formulario({ onSubmit: mostrarTarjeta }));
