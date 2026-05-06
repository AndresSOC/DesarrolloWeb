

const calificaciones = [85, 42, 90, 60, 73, 55, 98, 30];

// Valida que todos los valores sean números válidos
// Si alguno no lo es, imprime "Entrada inválida" y termina
for (let i = 0; i < calificaciones.length; i++) {
    if (isNaN(calificaciones[i])) {
        console.log("Entrada inválida");
        return;
    }
}

// Declara la función calcularPromedio(arreglo)
// Usa un bucle for para sumar todos los elementos
// Retorna la suma dividida entre la cantidad de elementos
// ....
function calcularPromedio(calificaciones){
    let suma=0;
    for(let i = 0; i<calificaciones.length; i++){
        suma+=calificaciones[i];
    };
    return suma/calificaciones.length;
};

// Declara la función encontrarMaximo(arreglo)
// Usa un bucle for para recorrer el arreglo
// Retorna el valor más alto encontrado
// ....

function encontrarMaximo(calificaciones){
    let maximo = 0
    for(let i = 0; i<calificaciones.length; i++){
        if(maximo<calificaciones[i]){
            maximo = calificaciones[i];
        };
    };
    return maximo;
};

// Declara la función encontrarMinimo(arreglo)
// Usa un bucle for para recorrer el arreglo
// Retorna el valor más bajo encontrado
// ....
function encontrarMinimo(calificaciones){
    let minimo = encontrarMaximo(calificaciones);

    for(let i = 0; i<calificaciones.length; i++){
        if(minimo>calificaciones[i]){
            minimo = calificaciones[i];
        };
    };
    return minimo;
};

// Declara la función contarAprobados(arreglo)
// Usa un bucle for y un contador
// Cuenta los elementos mayores o iguales a 60
// Retorna el contador
// ....

function contarAprobados(calificaciones){
    let c = 0;

    for(let i = 0; i<calificaciones.length; i++){
        if(calificaciones[i]>=60){
            c+=1;
        };
    };
    return c;
};

// Declara la función contarReprobados(arreglo)
// Usa un bucle for y un contador
// Cuenta los elementos menores a 60
// Retorna el contador
// ....

function contarReprobados(calificaciones){
    let c = 0;

    for(let i = 0; i<calificaciones.length; i++){
        if(calificaciones[i]<60){
            c+=1;
        };
    };
    return c;
};

// Llama a cada función e imprime los resultados con el formato:
// "Promedio: X.XX"   (2 decimales con toFixed(2))
// "Máximo: X"
// "Mínimo: X"
// "Aprobados: X"
// "Reprobados: X"
// ....

console.log("Promedio: "+(`${calcularPromedio(calificaciones).toFixed(2)}`));
console.log("Máximo: "+`${encontrarMaximo(calificaciones)}`);
console.log("Mínimo: "+`${encontrarMinimo(calificaciones)}`);
console.log("Aprobados: "+`${contarAprobados(calificaciones)}`);
console.log("Reprobados: "+`${contarReprobados(calificaciones)}`);



