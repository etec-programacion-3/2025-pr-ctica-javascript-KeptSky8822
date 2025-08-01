// Referencias a los elementos del DOM
const productList = document.getElementById('product-list');
const cartList = document.getElementById('cart-list');
const emptyCartBtn = document.getElementById('empty-cart');
const cartSummary = document.getElementById('cart-summary');




// Estado del carrito (array de productos)
let cart = [];

// Renderiza el carrito en el DOM y muestra el resumen
const renderCart = () => {
  cartList.innerHTML = '';
  cart.forEach((item, idx) => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price}`;
    li.dataset.id = item.id; // Asigna el id al li para identificarlo
    const btnEliminar = document.createElement('button');
    btnEliminar.textContent = 'Eliminar';
    btnEliminar.classList.add('eliminar');
    li.appendChild(btnEliminar);
    cartList.appendChild(li);
  });
  // TODO: Calcula y muestra el total y la cantidad de productos
  const total = cart.reduce((acum, item) => acum + Number(item.price), 0);
  const cantidad = cart.length;

  cartSummary.textContent = `Total: $${total.toFixed(2)} | Productos: ${cantidad}`;
};

// Maneja el evento de agregar productos al carrito usando delegación de eventos
productList.addEventListener('click', e => {
  if (e.target.classList.contains('add')) {
    const li = e.target.closest('li');
    const { id, name, price } = li.dataset;
    cart.push({ id, name, price });
    renderCart();
  }
});

cartList.addEventListener('click', e => {
  if (e.target.classList.contains('eliminar')) {
    const li = e.target.closest('li');
    const id = li.dataset.id;

    // Eliminar del arreglo cart por id
    cart = cart.filter(item => item.id !== id);
    renderCart();
  }
});

// TODO: Maneja el evento de vaciar el carrito
emptyCartBtn.addEventListener('click', () => {
  cart = [];
  renderCart();
});

// Render inicial del carrito
renderCart(); 