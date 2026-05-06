
const a = 10;
const b = 5;

// Valida que ambos valores sean números
if (isNaN(a) || isNaN(b)) {
    console.log("Entrada inválida");
    return;
}

// Declara la función sumar(a, b)
// Debe retornar la suma de a y b
// ...
const suma = (a,b) => a+b;


// Declara la función restar(a, b)
// Debe retornar la resta de a menos b
// ....

const resta = (a,b) => a-b;

// Declara la función multiplicar(a, b)
// Debe retornar la multiplicación de a por b
// ....
const multiplicar = (a,b) => a*b; 

// Declara la función dividir(a, b)
// Debe retornar la división de a entre b
// Si b es 0 debe retornar: "Error: división por cero"
// ....
const dividir = (a,b) => a/b;

// Llama a cada función e imprime los resultados con el formato:
// "Suma: resultado"
// "Resta: resultado"
// "Multiplicación: resultado"
// "División: resultado"
// ....

console.log("Suma: "+`${suma(a,b)}`);
console.log("Resta: "+`${resta(a,b)}`);
console.log("Multiplicación: "+`${multiplicar(a,b)}`);
console.log("División: "+`${dividir(a,b)}`);


