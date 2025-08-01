// EJERCICIO: Instala la dependencia dayjs con npm y úsala para mostrar la fecha, con TODOs y comentarios guía.
import dayjs from 'dayjs';

const ahora = dayjs();
console.log('Fecha actual formateada:', ahora.format('YYYY-MM-DD HH:mm:ss'));
document.body.innerHTML = `<p>Hora actual: ${ahora.format('YYYY-MM-DD HH:mm:ss')}</p>`;

// const now = ...
// document.body.innerHTML = ...

// Puedes ejecutar este archivo con Vite y ver el resultado en el navegador
