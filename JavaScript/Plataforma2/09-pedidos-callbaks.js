// ─────────────────────────────────────────────
// Simulador de pedido con callbacks
// ─────────────────────────────────────────────

// Función 1: tomarPedido(item, callback)
// Usa setTimeout con 100ms
// Dentro del setTimeout:
//   - Imprime: "Tomando pedido: " + item
//   - Llama a callback(item) para continuar la cadena
// ....
function tomarPedido(item, callback) {
  setTimeout(function () {
    console.log("tomar pedido: " + item);
    callback(item);
  }, 100);
}

// Función 2: prepararPedido(item, callback)
// Usa setTimeout con 200ms
// Dentro del setTimeout:
//   - Imprime: "Preparando pedido: " + item
//   - Llama a callback(item) para continuar la cadena
// ....
function prepararPedido(item,callback) {
  setTimeout(function () {
    console.log(`Preparando pedido: ` + item);
    callback(item);
  }, 200);
}

// Función 3: entregarPedido(item, callback)
// Usa setTimeout con 100ms
// Dentro del setTimeout:
//   - Imprime: "Entregando pedido: " + item
//   - Llama a callback() para finalizar la cadena
// ....

function entregarPedido(item) {
  setTimeout(function () {
    console.log(`Entrega de pedido: ` + item);
  }, 100);
}

// Encadena las tres funciones con "Pizza":
tomarPedido("Pizza", (item) => {
  prepararPedido(item, (item) => {
    entregarPedido(item, () => {
      console.log("¡Pedido completado!");
    });
  });
});
