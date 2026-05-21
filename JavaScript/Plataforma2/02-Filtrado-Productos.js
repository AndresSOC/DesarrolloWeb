const valores = [50, 150, 600, 80, 300, 750, 25, 450];

// Valida que todos los valores sean números válidos y no negativos
// Si alguno no lo es, imprime "Entrada inválida" y termina
// ....

for (let i = 0; i < valores.length; i++) {
  if (isNaN(valores[i])) {
    console.log("Entrada Invalida");
    break;
  }
}
// PASO 1 — Usa filter() para obtener los precios económicos
// Condición: precio menor a 100
// Guarda el resultado en: economicos
// ....
const economicos = valores.filter((valor) => valor < 100);

// PASO 2 — Usa filter() para obtener los precios intermedios
// Condición: precio mayor o igual a 100 Y menor o igual a 500
// Guarda el resultado en: intermedios
// ....
const intermedios = valores.filter((valor) => valor >= 100 && valor <= 500);

// PASO 3 — Usa filter() para obtener los precios premium
// Condición: precio mayor a 500
// Guarda el resultado en: premium
// ....

const premium = valores.filter((valor) => valor > 500);

// Imprime los resultados usando join(',') para unir los arreglos
// Si una categoría está vacía se imprime sin valores:
// "Económicos: X,X,X"
// "Intermedios: X,X,X"
// "Premium: X,X,X"
// ....

console.log(`Económicos: ${economicos.join(",")}`);
console.log(`Intermedios: ${intermedios.join(",")}`);
console.log(`Premium: ${premium.join(",")}`);
