// Importa express usando ES Modules
// import express from 'express';
// ....
import express from "express";

// Crea la aplicación Express
// const app = express();
// ....
const app = express();
// GET /
// Responde con status 200 y "Bienvenido al servidor"
// app.get('/', (req, res) => { ... });
// ....
app.get("/", (req, res) => {
  res.status(200).send("Bienvenido al servidor");
});

// GET /usuarios
// Responde con status 200 y "Lista de usuarios: Ana, Luis, María"
// ....
app.get("/usuarios", (req, res) => {
  res.status(200).send("Lista de usuarios: Ana, Luis, María");
});

// POST /usuarios
// Responde con status 201 y "Usuario creado correctamente"
// ....
app.post("/usuarios", (req, res) => {
  res.status(201).send("Usuario creado correctamente");
});

// DELETE /usuarios
// Responde con status 405 y "Método no permitido"
// ....
app.delete("/usuarios", (req, res) => {
  res.status(405).send("Método no permitido");
});

// GET /admin
// Responde con status 403 y "Acceso denegado"
// ....
app.get("/admin", (req, res) => {
  res.status(403).send("Acceso denegado");
});

// Middleware para cualquier ruta no encontrada (debe ir AL FINAL)
// USE /no-existe
// Responde con status 404 y "Ruta no encontrada"
// app.use((req, res) => { ... });
// ....
app.use((req, res) => {
  res.status(404).send("Ruta no encontrada");
});
// Inicia el servidor en el puerto 3000
// Imprime: "Servidor escuchando en puerto 3000"
// app.listen(3000, () => { ... });
// ....
const servidor = app.listen(0, () => {

  console.log(
    "Servidor escuchando en puerto: " +
    servidor.address().port
  );

});
