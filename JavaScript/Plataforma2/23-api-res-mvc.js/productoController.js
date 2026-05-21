// controllers/productoController.js — Capa Controller
// ─────────────────────────────────────────
// Importa las funciones del modelo
import { getAll, getById, create, update, remove } from "../models/producto.js";

// listar(req, res) — GET /productos
// Llama a getAll() y responde con status 200 + JSON
export const listar = (req, res) => {
  res.status(200).json(getAll());
};

// obtener(req, res) — GET /productos/:id
// Lee el id con Number(req.params.id)
// Si existe  → status 200 + JSON del producto
// Si no existe → status 404 + { "error": "Producto no encontrado" }
export const obtener = (req, res) => {
  const id = Number(req.params.id);
  const producto = getById(id);
  if (producto) return res.status(200).json(producto);
  res.status(404).json({ error: "Producto no encontrado" });
};

// crear(req, res) — POST /productos
// Llama a create(req.body) y responde con status 201 + JSON
export const crear = (req, res) => {
  const nuevo = create(req.body);
  res.status(201).json(nuevo);
};


// actualizar(req, res) — PUT /productos/:id
// Llama a update(Number(req.params.id), req.body)
// Si existe  → status 200 + JSON actualizado
// Si no existe → status 404 + { "error": "Producto no encontrado" }
export const actualizar = (req, res) => {
  const id = Number(req.params.id);
  const actualizado = update(id, req.body);
  if (actualizado) return res.status(200).json(actualizado);
  res.status(404).json({ error: "Producto no encontrado" });
};


// eliminar(req, res) — DELETE /productos/:id
// Llama a remove(Number(req.params.id))
// Si eliminó  → status 200 + { "mensaje": "Producto eliminado" }
// Si no existe → status 404 + { "error": "Producto no encontrado" }
export const eliminar = (req, res) => {
  const id = Number(req.params.id);
  const ok = remove(id);
  if (ok) return res.status(200).json({ mensaje: "Producto eliminado" });
  res.status(404).json({ error: "Producto no encontrado" });
};