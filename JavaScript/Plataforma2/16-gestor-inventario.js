const partes = ["stock", "Monitor"];
const operacion = partes[0];

// Arreglo de productos — NO modificar
const productos = [
  { id: 1, nombre: "Laptop", precio: 15000, stock: 5 },
  { id: 2, nombre: "Mouse", precio: 350, stock: 20 },
  { id: 3, nombre: "Teclado", precio: 750, stock: 15 },
  { id: 4, nombre: "Monitor", precio: 8000, stock: 3 },
  { id: 5, nombre: "Audífonos", precio: 1200, stock: 10 },
];

// OPERACIÓN "buscar"
// Entrada: "buscar NombreProducto"
// Usa find() para buscar por nombre (insensible a mayúsculas)
// Si existe  → "Encontrado: nombre — $precio — Stock: stock"
// Si no existe → "Producto no encontrado: nombre"
if (operacion === "buscar") {
  const nombre = partes[1];
  // ....

  const buscar = productos.find(
    (v) => v.nombre.toLowerCase() === nombre.toLowerCase(),
  );

  if (buscar) {
    console.log(
      `Encontrado: ${buscar.nombre} — $${buscar.precio} — Stock: ${buscar.stock}}`,
    );
  } else {
    console.log(`Producto no encontrado: ${nombre}}`);
  }

  // OPERACIÓN "actualizar"
  // Entrada: "actualizar NombreProducto nuevoPrecio"
  // Usa findIndex() para localizar el producto
  // Usa map() para generar un arreglo actualizado sin mutar el original
  // Si existe  → "Precio actualizado: nombre $precioAnterior → $nuevoPrecio"
  // Si no existe → "Producto no encontrado: nombre"
} else if (operacion === "actualizar") {
  const nombre = partes[1];
  const nuevoPrecio = Number(partes[2]);
  // ....

  const indice = productos.findIndex(
    (v) => v.nombre.toLowerCase() === nombre.toLowerCase(),
  );

  if (indice !== -1) {
    const precioAnterior = productos[indice].precio;

    const productosActualizados = productos.map((p) => {
      if (p.nombre.toLowerCase() === nombre.toLowerCase()) {
        return {
          ...p,
          precio: nuevoPrecio,
        };
      }
      return p;
    });

    console.log(
      `Precio actualizado: ${nombre} $${precioAnterior} → $${nuevoPrecio}`,
    );
  }

  // OPERACIÓN "stock"
  // Entrada: "stock NombreProducto"
  // Usa find() para buscar el producto
  // stock <= 5 → "sin stock" | stock > 5 → "en stock"
  // Si existe  → "nombre: estado (stock unidades)"
  // Si no existe → "Producto no encontrado: nombre"
} else if (operacion === "stock") {
  const nombre = partes[1];
  // ....
  
  const producto = productos.find(p => 
     p.nombre.toLowerCase() === nombre.toLowerCase()
  );

  if( producto ){
    const estado = producto.stock <= 5 ? 
      "sin stock" : "en stock";
      
    console.log(`nombre: ${producto.nombre} (${producto.stock})`);
  }else{
    console.log("Producto no encontrado: "+nombre);
  }

  // Si la operación no es ninguna de las anteriores:
} else {
  console.log("Operación no válida");
}
