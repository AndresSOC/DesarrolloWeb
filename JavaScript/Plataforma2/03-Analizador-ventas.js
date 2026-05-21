const valores = [200, 450, 100, 800, 350, 600];

// Valida que todos los valores sean números válidos y no negativos
// Si alguno no lo es, imprime "Entrada inválida" y termina
// ....
for (let i = 0; i < valores.length; i++) {
  if (isNaN(valores)) {
    console.log("Entrada inválida");
    break;
  }
}

// PASO 1 — Usa reduce() para calcular la suma total de las ventas
// Valor inicial del acumulador: 0
// Guarda el resultado en: total
// ....
const total = valores.reduce((acumulador, valor) => acumulador + valor, 0)


// PASO 2 — Usa reduce() para encontrar la venta máxima
// Compara el acumulador con cada valor y quédate con el mayor
// Valor inicial del acumulador: valores[0]
// Guarda el resultado en: maximo
// ....
const maximo = valores.reduce((acumulador, valor) => 
    acumulador < valor ? valor : acumulador,
valores[0]
)



// PASO 3 — Usa reduce() para encontrar la venta mínima
// Compara el acumulador con cada valor y quédate con el menor
// Valor inicial del acumulador: valores[0]
// Guarda el resultado en: minimo
// ....

const minimo = valores.reduce((acumulador,valor)=> 
    acumulador > valor ? valor : acumulador ,
valores[0])


// Imprime los resultados con el formato:
// "Total: X"
// "Máximo: X"
// "Mínimo: X"
// ....
console.log(`Total: ${total}`)
console.log(`Maximo: ${maximo}`)
console.log(`Mínimo: ${minimo}`)
