
const salarios  =[800,1200,500,1500,900,2000]

// Valida que todos los valores sean números positivos
// Si alguno no lo es, imprime "Entrada inválida" y termina
// ....

for(let i=0;i<salarios.length;i++){
    if(salarios[i]<0){
        console.log("Entrada inválida");
        break;
    }
};

// PASO 1 — map
// Usa .map() para aplicar un aumento del 10% a cada salario
// Redondea cada resultado a 2 decimales:
//   Math.round(salario * 1.1 * 100) / 100
// Guarda el resultado en: conAumento
// ....
conAumento = salarios.map(salario => 
    Math.round(salario * 1.1 * 100) / 100
);

// PASO 2 — filter
// Usa .filter() sobre conAumento para conservar solo
// los salarios mayores a 1000
// Guarda el resultado en: filtrados
// ....
const filtrados = conAumento.filter(salario => salario > 1000)

// PASO 3 — reduce
// Usa .reduce() sobre filtrados para sumar todos los salarios
// Redondea el total: Math.round(total * 100) / 100
// Guarda el resultado en: total
// ....
  const total = Math.round(
    filtrados.reduce((acc, salario) => acc + salario, 0) * 100
  ) / 100;

// Imprime los resultados con el formato:
// "Salarios con aumento: X,X,X"   (los valores separados por coma)
// "Salarios filtrados: X,X"        (puede quedar vacío si ninguno supera 1000)
// "Total: X"
// Usa .join(',') para unir los arreglos
// ....

console.log(`Salarios con aumento: ${conAumento.join(',')}`);
console.log(`Salarios filtrados: ${filtrados.join(',')}`);
console.log(`Total: ${total}`);