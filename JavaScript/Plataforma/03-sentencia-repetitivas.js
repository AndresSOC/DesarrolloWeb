const n =0 ;

// Valida que la entrada sea un número positivo
// Si no lo es, imprime: "Entrada inválida. Debe ser un número positivo"
// Si lo es use un bucle (for, while o do-while) para sumar los primeros n números naturales
// e imprima el resultado con el formato: "La suma de los primeros n números naturales es: resultado"
// ...

let count = 0;
let i =0;

if(n<=0 || typeof n === "string" ){
    console.log("Entrada inválida. Debe ser un número positivo");
}else{
    do{
        i++;
        count+=i;
    }while(i<n);
    console.log("La suma de los primeros "+`${n}`+" números naturales es: "+`${count}`);
}