// Importa el módulo http
// import http from 'http';
import http from "http";

const servidor = http.createServer((req, res) => {
  // Lee la URL y el método de la petición
  // Puedes usar desestructuración: const { url, method } = req;
  const { url, method } = req;

  // Implementa las siguientes rutas con if / else if / else:
  //
  // GET  /          → status 200 → "Bienvenido al servidor"
  if (method === "GET" && url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Bienvenido al servidor");
  }
  //
  // GET  /usuarios  → status 200 → "Lista de usuarios: Ana, Luis, María"
  else if (method === "GET" && url === "/usuarios") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Lista de usuarios: Ana, Luis, María");
  }
  //
  // POST /usuarios  → status 201 → "Usuario creado correctamente"
  else if (method === "POST" && url === "/usuarios") {
    res.writeHead(201, { "Content-Type": "text/plain" });
    res.end("Usuario creado correctamente");
  }
  //
  // Cualquier otro método en /usuarios → status 405 → "Método no permitido"
  else if (url === "/usuarios") {
    res.writeHead(405, { "Content-Type": "text/plain" });
    res.end("Método no permitido");
  }
  //
  // Cualquier método en /admin → status 403 → "Acceso denegado"
  else if (url === "/admin") {
    res.writeHead(403, { "Content-Type": "text/plain" });
    res.end("Acceso denegado");
  }
  //
  // Cualquier otra ruta → status 404 → "Ruta no encontrada"
  else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Ruta no encontrada");
  }

  // Para cada caso usa:
  //   res.writeHead(statusCode, { 'Content-Type': 'text/plain' });
  //   res.end('mensaje');
});

// Inicia el servidor en el puerto 3000
// Imprime: "Servidor escuchando en puerto 3000"

servidor.listen(0, () =>
  console.log("Servidor escuchando en puerto: " + servidor.address().port),
);
