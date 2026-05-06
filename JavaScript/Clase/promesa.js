//new promise(resolve, reject)

function obtenerUsuario(id){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id <= 0) {
        reject(new Error("ID inválido"));
      } else {
        resolve({ id, nombre: "Ana García", edad: 28 });
      }
    }, 1000);
  });
}

obtenerUsuario(42)
  .then(usuario => {
    console.log("Usuario recibido:", usuario.nombre);
    console.log("Edad:", usuario.edad);
  })
  .catch(err => console.error("Error:", err.message));