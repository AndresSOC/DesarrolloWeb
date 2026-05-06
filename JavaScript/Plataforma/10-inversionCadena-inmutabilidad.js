const cadena = "hola";

// Valida que la entrada no esté vacía
// Si lo está, imprime "Entrada inválida" y termina
// ....
if(!isNaN(cadena)){
    console.log("Entrada inválida");
}else{
    // Invierte la cadena SIN modificar la variable original
    // Pista: usa split(''), reverse() y join('')
    // ....
    let cadena2=[];

    for(let i=0;i<cadena.split('').length;i++){
        cadena2[i] = cadena.split('')[i];
    };
    cadena2=cadena2.reverse().join('');

    // Imprime la cadena original y la invertida con el formato:
    // "Original: cadena"
    // "Invertida: cadenaInvertida"
    // ....
    console.log("Original: "+`${cadena}`)
    console.log("Invertida: "+`${cadena2}`)
};

