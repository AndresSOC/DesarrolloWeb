// index.js — Programa principal
// Importa las tres funciones desde mathUtils.js
// usando la sintaxis: import { ... } from './mathUtils.js';
// ....
import {cuadrado,multiplicar,sumar} from './mathUtils.js'
// Llama a cada función con los siguientes valores
// e imprime los resultados con el formato exacto:
//
//   sumar(5, 3)        → "Suma: 8"
//   multiplicar(5, 3)  → "Multiplicación: 15"
//   cuadrado(5)        → "Cuadrado: 25"
// ....

console.log(`Suma: ${sumar(5,3)}`)
console.log(`Multiplicar: ${multiplicar(5,3)}`)
console.log(`cuadrado: ${cuadrado(5,3)}`)
