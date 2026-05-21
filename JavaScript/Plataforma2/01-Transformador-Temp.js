const valores = [0, 100, -10, 37, 25];

// Valide que todos los valores sean números válidos
// Si alguno no lo es, imprima "Entrada inválida" y termine
for (let i = 0; i < valores.length; i++) {
  if (isNaN(valores[i])) {
    console.log("Entrada invalida");
    break;
  }
}
// PASO 1 — Use map() para convertir Celsius a Fahrenheit
// Fórmula: (C * 9/5) + 32
// Redondee con: parseFloat(resultado.toFixed(2))
// Guarde el resultado en: fahrenheit
// ....
CelsiusFahrenheit = valores.map(
  (valor) => (fahrenheit = (valor * 9) / 5 + 32),
  //console.log(parseFloat(fahrenheit.toFixed(2)));
);

// PASO 2 — Use map() para convertir Celsius a Kelvin
// Fórmula: C + 273.15
// Redondee con: parseFloat(resultado.toFixed(2))
// Guarde el resultado en: kelvin
// ....
CelsiusKelvin = valores.map(
  (valor) => (fahrenheit = valor + 273.15),
  //console.log(parseFloat(fahrenheit.toFixed(2)));
);

// PASO 3 — Use map() para asignar una etiqueta a cada temperatura:
//   menor a 0            → "frío"
//   entre 0 y 30 (ambos inclusive) → "templado"
//   mayor a 30           → "caliente"
// Guarde el resultado en: etiquetas
// ....

Etiquetas = valores.map((valor) => {
  if (valor < 0) {
    return "frio";
  } else if (valor < 30) {
    return "templado";
  } else {
    return "caliente";
  }
});

// Imprima los resultados usando join(',') para unir los arreglos:
// "Fahrenheit: X,X,X"
// "Kelvin: X,X,X"
// "Etiquetas: X,X,X"
// ....

console.log(`Fahrenheit: ${CelsiusFahrenheit.join(",")}`);
console.log(`Kelvin: ${CelsiusKelvin.join(",")}`);
console.log(`Etiquetas: ${Etiquetas.join(",")}`);
