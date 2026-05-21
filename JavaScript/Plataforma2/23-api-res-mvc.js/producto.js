// models/producto.js — Capa Model
// ─────────────────────────────────────────
// Contiene los datos en memoria y las
// funciones que operan sobre ellos.
// Exporta cada función con: export const nombre = ...

// Datos en memoria — NO modificar esta lista inicial
let productos = [
  { id: 1, nombre: "Laptop", precio: 15000 },
  { id: 2, nombre: "Mouse", precio: 350 },
  { id: 3, nombre: "Teclado", precio: 750 },
];

// getAll() — retorna todos los productos

export const getAll = () => [...productos];

// getById(id) — retorna el producto con ese id o undefined

export const getById = (id) => productos.find((id) => productos.id === id);

// create(datos) — crea un nuevo producto con id automático
// El nuevo id debe ser: productos.length + 1
// Agrega el producto al arreglo y lo retorna
export const create = (datos) => {
  const nuevo = {
    id: productos.length + 1,
    ...datos,
  };
  productos.push(nuevo);
  return nuevo;
};

// update(id, datos) — actualiza el producto con ese id
// Si no existe retorna null
// Usa spread: { ...productos[i], ...datos }
export const update = (id, datos) => {
  const i = productos.findIndex((i) => i.id === id);
  if (i === -1) return null;
  productos[id] = {
    ...productos[i],
    ...datos,
  };
  return productos[i];
};

// remove(id) — elimina el producto con ese id
// Si no existe retorna false, si lo elimina retorna true
export const remove = (id) => {
  const i = productos.findIndex((i) => i.id === id);
  if (i === -1) return false;
  productos.splice(i, 1);
  return true;
};
