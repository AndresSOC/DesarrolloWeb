const busqueda = "Laptop";
// Arreglo de productos — NO modificar
const productos = [
  { id: 1, nombre: "Laptop", precio: 15000, stock: 5 },
  { id: 2, nombre: "Mouse", precio: 350, stock: 20 },
  { id: 3, nombre: "Teclado", precio: 750, stock: 15 },
  { id: 4, nombre: "Monitor", precio: 8000, stock: 3 },
  { id: 5, nombre: "Audífonos", precio: 1200, stock: 10 },
];

// Usa find() para buscar el producto cuyo nombre coincida con busqueda
// La búsqueda debe ser insensible a mayúsculas/minúsculas (usa toLowerCase())
// Guarda el resultado en: producto
// ....
const producto = productos.find(
  (valor) => valor.nombre.toLowerCase() == busqueda.toLowerCase(),
);
// Usa findIndex() para encontrar la posición del producto en el arreglo
// Usa la misma condición que en find()
// Guarda el resultado en: indice
// ....

const indice = productos.findIndex(
  (valor) => valor.nombre.toLowerCase() == busqueda.toLowerCase(),
);

// Si el producto fue encontrado imprime:
// "Producto encontrado:"
// "  Nombre: " + producto.nombre
// "  Precio: $" + producto.precio
// "  Stock: " + producto.stock + " unidades"
// "  Posición en arreglo: " + indice
//
// Si NO fue encontrado imprime:
// "Producto no encontrado: " + busqueda
// ....

if (producto) {
  console.log("Producto encontrado:");
  console.log("  Nombre: " + producto.nombre);
  console.log("  Precio: $" + producto.precio);
  console.log("  Stock: " + producto.stock + " unidades");
  console.log("  Posición en arreglo: " + indice);
} else {
  console.log("Producto no encontrado: " + busqueda);
}
