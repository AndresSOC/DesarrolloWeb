 
const elementos1 = [10, 20, 30, -5 ,-10, -15, 42 , 10 , "abc", 20];
const elementos2 = [ "abc", 20,10, 20, 30, -5 ,-10, -15, 42 , 10];
const elementos = [10, 20, 30, -5 ,-10, -15, 42 , 10, 20];
const elementos4 = [10, 20, 30, -5 ,-10, -15, 42 , 10, "abc"];

console.log(elementos);
    
// Valida que todos los elementos del arreglo sean números válidos


// Si alguno no lo es, imprime:
// "Entrada inválida. Debe ser un arreglo de números"
// ....
// Usa un bucle for para sumar los elementos del arreglo
// ....
// Imprime el resultado con el formato:
// "La suma de los elementos del arreglo es: resultado"
// ....


let suma = 0;
for(let i=0;i<elementos.length;i++){
    if(typeof(elementos[i])!=='string'){
        suma+=elementos[i];
        if(i+1==elementos.length){
            console.log("La suma de los elementos del arreglo es: "+`${suma}`)
        }
    }else {
        console.log("Entrada inválida. Debe ser un arreglo de números")
        break
    }        
};

