// Controlador: Conecta el modelo y la vista, y gestiona la lógica de la app
import { TaskModel } from './model.js';
import { TaskView } from './view.js';

class TaskController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    // Renderiza la vista inicial con las tareas actuales
    this.view.render(this.model.getTasks());
    // Asocia el evento de agregar tarea
    this.view.bindAddTask(this.handleAddTask);
    // TODO: Asocia los eventos de eliminar y editar tarea
    this.view.bindRemoveTask(this.handleRemoveTask);
    this.view.bindEditTask(this.handleEditTask)
  }

  // Maneja el evento de agregar tarea
  handleAddTask = task => {
    if (!task.trim()) {
    this.view.showMessage('La tarea no puede estar vacía');  // Mostrar mensaje de error
    return;
    }
    this.model.addTask(task); // Actualiza el modelo
    this.view.render(this.model.getTasks()); // Actualiza la vista
    this.view.clearMessage();
  };

  // TODO: Maneja el evento de eliminar tarea
   // Eliminar tarea
  handleRemoveTask = idx => {
    this.model.removeTask(idx);
    this.view.render(this.model.getTasks());
  };
  // Editar tarea
  handleEditTask = idx => {
    const currentTask = this.model.getTasks()[idx];
    const newTask = prompt('Edita la tarea:', currentTask);
    if (newTask === null) {
      this.view.showMessage('Edición cancelada', false);  // Mensaje verde, no error
      return;
    }
    if (!newTask.trim()) {
      this.view.showMessage('La tarea editada no puede estar vacía');  // Mensaje error
      return;
    }
    this.model.editTask(idx, newTask.trim());
    this.view.render(this.model.getTasks());
    this.view.clearMessage();  // Limpiar mensajes si edición exitosa
  };
}

// Instancia el controlador con el modelo y la vista
new TaskController(new TaskModel(), new TaskView()); 