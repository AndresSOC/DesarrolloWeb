// ─────────────────────────────────────────────
// Simulador de inicio de sesión con async/await
// ─────────────────────────────────────────────

// Función 1: verificarCredenciales(usuario, password)
// Retorna: new Promise((resolve, reject) => { ... })
// Dentro de la Promise:
//   - Imprime: "Verificando credenciales..."
//   - Usa setTimeout con 100ms
//   - Si usuario === "error" → llama a reject("Usuario no encontrado")
//   - Si es válido           → llama a resolve(usuario)
// ....
function verificarCredenciales(usuario, password) {
  return new Promise((resolve, reject) => {
    console.log("Verificando credenciales...");
    setTimeout(() => {
      if (usuario === "error") {
        reject("Usuario no encontrado");
      } else {
        resolve(usuario);
      }
    }, 100);
  });
}

// Función 2: cargarPerfil(usuario)
// Retorna: new Promise((resolve) => { ... })
// Dentro de la Promise:
//   - Imprime: "Cargando perfil de: " + usuario
//   - Usa setTimeout con 200ms
//   - Llama a: resolve({ nombre: "Ana García", rol: "Admin" })
// ....
function cargarPerfil(usuario) {
  return new Promise((resolve) => {
    console.log("Cargando perfil de: " + usuario);
    setTimeout(() => {
      resolve({
        nombre: "Ana García",
        rol: "Admin",
      });
    }, 200);
  });
}

// Función 3: registrarAcceso(usuario)
// Retorna: new Promise((resolve) => { ... })
// Dentro de la Promise:
//   - Imprime: "Registrando acceso..."
//   - Usa setTimeout con 100ms
//   - Llama a: resolve("Acceso registrado correctamente")
// ....
function registrarAcceso(usuario) {
  return new Promise((resolve) => {
    console.log("Registrando acceso...");
    setTimeout(() => {
      resolve("Acceso registrado correctamente");
    }, 100);
  });
}

// Función principal: async function iniciarSesion(usuario, password)
// Usa try/catch para manejar errores
// Dentro del try:
//   1. const usuarioVerificado = await verificarCredenciales(usuario, password)
//      Imprime: "Credenciales válidas"
//   2. const perfil = await cargarPerfil(usuarioVerificado)
//      Imprime: "Perfil cargado: " + perfil.nombre + ", " + perfil.rol
//   3. const acceso = await registrarAcceso(usuarioVerificado)
//      Imprime: acceso
//      Imprime: "Sesión iniciada para: " + perfil.nombre
// Dentro del catch(error):
//      Imprime: "Error: " + error
// ....

// Llama a iniciarSesion con usuario "Ana" y password "1234"
// ....

async function inciarSesion(usuario, password) {
  try {
    const usuarioVerificado = await verificarCredenciales(usuario, password);
    console.log("Credenciales válidas");
    const perfil = await cargarPerfil(usuarioVerificado);
    console.log("Perfil cargado: " + perfil.nombre + ", " + perfil.rol);
    const acceso = await registrarAcceso(usuarioVerificado);
    console.log(acceso);
    console.log("Sesión iniciada para: " + perfil.nombre);
  } catch (error) {
    console.log("Error: " + error);
  }
}

inciarSesion("Ana","1234");


