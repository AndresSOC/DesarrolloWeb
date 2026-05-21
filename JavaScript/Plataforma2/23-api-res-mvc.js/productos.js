// routes/productos.js — Router
// ─────────────────────────────────────────
// Importa Router desde express
import { Router } from "express";

// Importa los controladores desde productoController.js
import {
  listar,
  obtener,
  crear,
  actualizar,
  eliminar,
} from "../controllers/productoController.js";

// Crea el router
const router = Router();

// Define las rutas conectándolas con los controladores:
router.get("/", listar);
router.get("/:id", obtener);
router.post("/", crear);
router.put("/:id", actualizar);
router.delete("/:id", eliminar);

// Exporta el router como default
export default router;
