// Ejemplo 1:
// Async/await básico — await sustituye a .then()
// Una función marcada con async siempre devuelve una 
// promesa. await pausa su ejecución hasta que la promesa 
// resuelve.

function obtenerUsuario(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id <= 0) reject(new Error("ID inválido"));
      else resolve({ id, nombre: "Jonathan Córdoba", edad: 40 });
    }, 1000);
  });
}

// async/await: sin .then(), código lineal y legible
async function main() {
    try{
        const usuario = await obtenerUsuario(42);
        console.log("Usuario recibido:", usuario.nombre);
        console.log("Edad:", usuario.edad);
    } catch(msg){
        console.log("Error: " + msg);
    } 
}

main();