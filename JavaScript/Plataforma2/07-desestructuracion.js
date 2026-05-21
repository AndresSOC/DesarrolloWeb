// Objeto y arreglo de partida — NO modificar estas dos líneas
const persona = { nombre: 'Ana', edad: 28, ciudad: 'Madrid' };
const colores  = ['rojo', 'verde', 'azul'];

// PARTE 1 — Desestructuración de objeto
// Extrae nombre, edad y ciudad usando desestructuración:
//   const { ... } = persona;
// ....
const { nombre, edad, ciudad } = persona

// PARTE 2 — Desestructuración de arreglo
// Extrae los tres colores usando desestructuración:
//   const [ ... ] = colores;
// ....
const [ pc, sc, tc ] =  colores

// Imprime los resultados con el formato exacto:
// "Nombre: Ana"
// "Edad: 28"
// "Ciudad: Madrid"
// "Primer color: rojo"
// "Segundo color: verde"
// "Tercer color: azul"
// ....
console.log(`Nombre: ${persona.nombre}`)
console.log(`Edad: ${persona.edad}`)
console.log(`Ciudad: ${persona.ciudad}`)
console.log(`Primer color: ${pc}`)
console.log(`Segundo color: ${sc}`)
console.log(`Tercer color: ${tc}`)