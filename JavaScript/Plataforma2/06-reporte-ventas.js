const valores = [1000, 400, 800, 200, 600, 1500];

// Valida que todos los valores sean números no negativos
// Si alguno no lo es, imprime "Entrada inválida" y termina
// ....
for (let i = 0; i < valores.length; i++) {
  if (!Number.isInteger(valores[i])) {
    console.log("Entrada inválida");
    break;
  }
}

// PASO 1 — Usa map() para calcular la ganancia neta de cada venta
// Fórmula: venta * 0.85
// Redondea con: Math.round(resultado * 100) / 100
// Guarda el resultado en: netas
// ....
const netas = valores.map((valor) => Math.round(valor * 0.85 * 100) / 100);

// PASO 2 — Usa filter() sobre netas para conservar
// solo las ganancias mayores a 500
// Guarda el resultado en: validas
// ....
const validas = netas.filter((valor) => valor > 500);

// PASO 3 — Usa reduce() sobre validas para sumar
// todas las ganancias filtradas (valor inicial: 0)
// Guarda el resultado en: total
// ....

const total = validas.reduce((acumulador, valor) => (acumulador += valor), 0);

// Calcula la cantidad de ventas válidas y el promedio:
//   cantidad : validas.length
//   promedio : total / cantidad  (redondeado: Math.round(resultado * 100) / 100)
//              Si cantidad es 0 → promedio = 0
// ....
const ventasValidas = validas.length;
const promedio =
  ventasValidas === 0 ? 0 : Math.round((total / ventasValidas) * 100) / 100;

// Imprime los resultados con el formato:
// "Ganancias netas: X,X,X"      (usa join(','))
// "Ganancias válidas: X,X"      (puede quedar vacío)
// "Total acumulado: X"
// "Ventas válidas: X"
// "Promedio: X"
// ....

console.log(`Ganancias netas: ${netas}`)
console.log(`Ganancias válidas: ${validas}`)
console.log(`Total acumulado: ${total}`)
console.log(`Ventas validas: ${ventasValidas}`)
console.log(promedio.toFixed(2));
