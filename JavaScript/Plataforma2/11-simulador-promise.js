// ─────────────────────────────────────────────
// Simulador de consulta a una API con Promises
// ─────────────────────────────────────────────

// Función 1: conectarServidor()
// Retorna: new Promise((resolve) => { ... })
// Dentro de la Promise:
//   - Imprime: "Conectando al servidor..."
//   - Usa setTimeout con 100ms
//   - Dentro del setTimeout llama a: resolve("conexión establecida")
// ....
function conectarServidor() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Conectando al servidor...");
      resolve("conexión establecida");
    }, 100);
  });
}

// Función 2: obtenerDatos(conexion)
// Retorna: new Promise((resolve) => { ... })
// Dentro de la Promise:
//   - Imprime: "Conexión establecida"
//   - Imprime: "Obteniendo datos..."
//   - Usa setTimeout con 200ms
//   - Dentro del setTimeout llama a: resolve("datos recibidos")
// ....
function obtenerDatos(conexion) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Conexión establecida");
      console.log("Obteniendo datos");
      resolve("datos recibidos");
    }, 200);
  });
}

// Función 3: procesarDatos(datos)
// Retorna: new Promise((resolve) => { ... })
// Dentro de la Promise:
//   - Imprime: "Datos recibidos"
//   - Imprime: "Procesando datos..."
//   - Usa setTimeout con 100ms
//   - Dentro del setTimeout llama a: resolve("datos procesados correctamente")
// ....
function procesarDatos(datos) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Datos recibidos");
      console.log("Procesando datos...");
      resolve("datos procesados correctamente");
    },100);
  });
}

// Encadena las tres funciones usando .then() y maneja errores con .catch():
//   conectarServidor()
//       .then(conexion  => obtenerDatos(conexion))
//       .then(datos     => procesarDatos(datos))
//       .then(resultado => console.log("Resultado: " + resultado))
//       .catch(error    => console.log("Error: " + error))
// ....

conectarServidor()
    .then(conexion  => obtenerDatos(conexion))
    .then(datos     => procesarDatos(datos))
    .then(resultado => console.log("Resultado: " + resultado))
    .catch(error    => console.log("Error: " + error))

