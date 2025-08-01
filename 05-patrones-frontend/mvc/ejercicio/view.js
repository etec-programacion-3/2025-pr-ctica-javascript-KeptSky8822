// Vista: Se encarga de la presentación y la interacción con el usuario
export class TaskView {
  constructor() {
    // Referencias a los elementos del DOM
    this.list = document.getElementById('task-list');
    this.form = document.getElementById('task-form');
    this.input = document.getElementById('task-input');
    this.messageDiv = document.getElementById('message');
  }

  // Renderiza la lista de tareas en el DOM
  render(tasks) {
    this.list.innerHTML = '';
    tasks.forEach((task, idx) => {
      const li = document.createElement('li');
      li.textContent = task;
      
      
      // Crear botón Editar
      const btnEditar = document.createElement('button');
      btnEditar.textContent = 'Editar';
      btnEditar.dataset.index = idx;

      // Crear botón Eliminar
      const btnEliminar = document.createElement('button');
      btnEliminar.textContent = 'Eliminar';
      btnEliminar.dataset.index = idx;

      // Agregar botones al li
      li.appendChild(btnEditar);
      li.appendChild(btnEliminar);


      this.list.appendChild(li);
    });
  }

  // Asocia el evento de agregar tarea al formulario
  bindAddTask(handler) {
    this.form.onsubmit = e => {
      e.preventDefault();
      handler(this.input.value); // Llama al controlador con el valor ingresado
      this.input.value = '';
    };
  }

  // TODO: Asocia el evento de eliminar tarea a la lista

  bindRemoveTask(handler) {
    this.list.addEventListener('click', e => {
      if (e.target.tagName === 'BUTTON' && e.target.textContent === 'Eliminar') {
        const index = e.target.dataset.index;
        handler(index);
      }
    });
  }

  // TODO: Asocia el evento de editar tarea a la lista
    bindEditTask(handler) {
    this.list.addEventListener('click', e => {
      if (e.target.tagName === 'BUTTON' && e.target.textContent === 'Editar') {
        const index = Number(e.target.dataset.index); 
        handler(index);
      }
    });
  }

  showMessage(msg, isError = true) {
  if (!this.messageDiv) return;
  this.messageDiv.textContent = msg;
  this.messageDiv.style.color = isError ? 'red' : 'green';
  this.messageDiv.style.marginTop = '8px';
  }
  

  clearMessage() {
  if (!this.messageDiv) return;
    this.messageDiv.textContent = '';
  }

}
