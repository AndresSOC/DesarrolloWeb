// Importa express
// import express from 'express';
// ....
import express from "express";

// Crea la aplicación
// const app = express();
// ....

const app = express();
// Middleware para parsear JSON en el body de las peticiones
// app.use(express.json());
// ....
app.use(express.json());

// Datos en memoria — NO modificar esta lista inicial
let productos = [
  { id: 1, nombre: "Laptop", precio: 15000 },
  { id: 2, nombre: "Mouse", precio: 350 },
  { id: 3, nombre: "Teclado", precio: 750 },
];

// GET /productos
// Retorna todos los productos como JSON con status 200
// app.get('/productos', (req, res) => { ... });
// ....
app.get("/productos", (req, res) => {
  res.status(200).send(productos);
});

// GET /productos/:id
// Busca el producto por id (usa Number(req.params.id))
// Si existe  → status 200 + JSON del producto
// Si no existe → status 404 + { "error": "Producto no encontrado" }
// ....
app.get("/productos/:id", (req, res) => {
  const id = Number(req.params.id);

  const producto = productos.find((p) => p.id === id);

  if (producto) {
    res.status(200).json(producto);
  } else {
    res.status(404).json({ error: "Producto no encontrado" });
  }
});

// POST /productos
// Lee nombre y precio desde req.body
// Crea un nuevo producto con id = productos.length + 1
// Lo agrega al arreglo con push()
// Responde con status 201 + JSON del nuevo producto
// ....

app.post("/productos", (req, res) => {
  const { nombre, precio } = req.body;

  const nuevoProducto = {
    id: productos.length + 1,
    nombre,
    precio,
  };

  productos.push(nuevoProducto);
  res.status(201).json(nuevoProducto);
});

// PUT /productos/:id
// Busca el índice con findIndex()
// Si no existe → status 404 + { "error": "Producto no encontrado" }
// Si existe → actualiza con spread: { ...productos[indice], ...req.body }
// Responde con status 200 + JSON del producto actualizado
// ....

app.put("/productos/:id", (req, res) => {
  const id = Number(req.params.id);
  const indice = productos.findIndex((p) => p.id === id);

  if (indice === -1) {
    res.status(404).json({
      error: "Producto no encontrado",
    });
  } else {
    productos[indice] = {
      ...productos[indice],
      ...req.body,
    };
    res.status(200).json(productos[indice]);
  }
});

// DELETE /productos/:id
// Busca el índice con findIndex()
// Si no existe → status 404 + { "error": "Producto no encontrado" }
// Si existe → elimina con splice() y responde status 200 + { "mensaje": "Producto eliminado" }
// ....

app.delete("/productos/:id", (res, req) => {
  const id = Number(req.params.id);
  const indice = productos.findIndex((p) => p.id === id);
  if (indice === -1) {
    res.status(404).json({
      error: "Producto no encontrado",
    });
  } else {
    productos.splice(indice,1)
    res.status(200).json({
        mensaje: "Producto eliminado"
    });
  }
});

// Inicia el servidor en el puerto 3000
// Imprime: "Servidor escuchando en puerto 3000"
// app.listen(3000, () => { ... });
// ....

const servidor = app.listen(0,()=>{
    console.log("Servidor escuchando en puerto"+
    servidor.address.port());
    
})
