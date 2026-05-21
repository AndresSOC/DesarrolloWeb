// ─────────────────────────────────────────────
// Consultas paralelas con Promise.all()
// ─────────────────────────────────────────────

// Función 1: obtenerUsuario()
// Retorna: new Promise((resolve) => { ... })
// Usa setTimeout con 300ms
// Llama a: resolve("Ana García")
// ....

function obtenerUsuario() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Ana García");
    }, 300);
  });
}

// Función 2: obtenerProductos()
// Retorna: new Promise((resolve) => { ... })
// Usa setTimeout con 150ms
// Llama a: resolve("Laptop, Mouse, Teclado")
// ....
function obtenerProductos() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Laptop, Mouse, Teclado");
    }, 150);
  }, 150);
}

// Función 3: obtenerPedidos()
// Retorna: new Promise((resolve) => { ... })
// Usa setTimeout con 200ms
// Llama a: resolve("3 pedidos pendientes")
// ....
function obtenerPedidos() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("3 pedidos pendientes");
    }, 200);
  });
}
// Usa Promise.all() para lanzar las tres consultas EN PARALELO
// y encadena con .then() usando desestructuración de arreglo:

Promise.all([obtenerUsuario(), obtenerProductos(), obtenerPedidos()])
  .then(([usuario, productos, pedidos]) => {
    console.log("Usuario: " + usuario);
    console.log("Productos: " + productos);
    console.log("Pedidos: " + pedidos);
    console.log("✅ Todos los servicios respondieron");
  })
  .catch((error) => console.log("Error: " + error));
