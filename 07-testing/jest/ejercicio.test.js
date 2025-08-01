// Ejercicio: pruebas unitarias con Jest

function suma(a, b) {
  return a + b;
}

// EJERCICIO: Implementa la función totalCarrito que reciba un array de productos y devuelva el total

function totalCarrito(carrito) {
  if (!Array.isArray(carrito)) {
    throw new Error("El argumento debe ser un array");
  }

  return carrito.reduce((total, producto) => {
    const { precio, cantidad } = producto;

    // Validaciones básicas
    if (typeof precio !== 'number' || typeof cantidad !== 'number') {
      throw new Error("Cada producto debe tener 'precio' y 'cantidad' numéricos");
    }

    return total + precio * cantidad;
  }, 0);
}


test('suma 2 + 2 es 4', () => {
  expect(suma(2, 2)).toBe(4);
});

test('suma -1 + 1 es 0', () => {
  expect(suma(-1, 1)).toBe(0);
});

test('suma 2 + 2 debe ser 5 (fallará)', () => {
  expect(suma(2, 2)).toBe(5);  // Intencionalmente mal para que falle
});

// EJERCICIO: Agrega tests para totalCarrito
 test('calcula correctamente el total de un carrito con varios productos', () => {
    const carrito = [
      { precio: 100, cantidad: 2 },
      { precio: 50, cantidad: 3 },
    ];
    expect(totalCarrito(carrito)).toBe(350);
  });

  test('devuelve 0 para un carrito vacío', () => {
    expect(totalCarrito([])).toBe(0);
  });

  test('devuelve 0 si todos los productos tienen cantidad 0', () => {
    const carrito = [
      { precio: 100, cantidad: 0 },
      { precio: 50, cantidad: 0 },
    ];
    expect(totalCarrito(carrito)).toBe(0);
  });

  test('lanza un error si el argumento no es un array', () => {
    expect(() => totalCarrito(null)).toThrow("El argumento debe ser un array");
    expect(() => totalCarrito({})).toThrow("El argumento debe ser un array");
  });

  test('lanza un error si algún producto no tiene precio numérico', () => {
    const carrito = [
      { precio: "100", cantidad: 2 }
    ];
    expect(() => totalCarrito(carrito)).toThrow("Cada producto debe tener 'precio' y 'cantidad' numéricos");
  });

  test('lanza un error si algún producto no tiene cantidad numérica', () => {
    const carrito = [
      { precio: 100, cantidad: "2" }
    ];
    expect(() => totalCarrito(carrito)).toThrow("Cada producto debe tener 'precio' y 'cantidad' numéricos");
  });

  test('funciona con números decimales', () => {
    const carrito = [
      { precio: 19.99, cantidad: 2 },
      { precio: 10.5, cantidad: 1 },
    ];
    expect(totalCarrito(carrito)).toBeCloseTo(50.48);
  });