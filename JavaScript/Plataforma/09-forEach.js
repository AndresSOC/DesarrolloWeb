const precios = [85, 320, 750];

// Valida que todos los valores sean números válidos y no negativos
// Si alguno no lo es, imprime "Entrada inválida" y termina
// ....

for(let i = 0; i<precios.length; i++){
    if(isNaN(precios[i])){
        console.log("Entrada inválida");
        break;
    };
};

// Declara una variable acumuladora para la suma total
// ....
let a = 0;

// Usa forEach para recorrer el arreglo de precios
// Por cada precio debes:
//   1. Usar el índice para mostrar su posición (índice + 1)
//   2. Clasificarlo como "caro", "moderado" o "barato"
//      - caro     : precio > 500
//      - moderado : precio >= 101 y precio <= 500
//      - barato   : precio >= 0  y precio <= 100
//   3. Acumular el precio en la suma total
//   4. Imprimir: "Precio N: $precio - categoría"
// ....
precios.forEach((precio, indice) => {
    // ....
    if(precio <= 100){
        console.log("Precio "+`${indice+1}`+": $"+`${precio}`+"-barato");
        a+=precio;
    }else if(precio <=500){
        console.log("Precio "+`${indice+1}`+": $"+`${precio}`+"-moderado");
        a+=precio;
    }else{
        console.log("Precio "+`${indice+1}`+": $"+`${precio}`+"-caro");
        a+=precio;
    };
});

// Imprime el separador y el resumen con el formato:
// ---
console.log("---");
// Total de precios: N
console.log("Total de precios: "+`${precios.length}`);
// Suma total: $X
// ....
console.log("Suma total: $"+`${a}`)