let lineas = ["Ana,Pedro,Mariana,Luis,Alejandro,Sofia","A"];

// Valida que haya dos líneas: nombres y letra de búsqueda
// Si no, imprime "Entrada inválida" y termina
// ....

if( lineas.length !=2 || lineas[1].length != 1){
    console.log("Entrada inválida");
}else{
    // Separa los nombres por coma y obtén la letra de búsqueda
    // ....
    nombres = lineas[0].split(',');
    busqueda = lineas[1];

    // 1. Usa un bucle for para imprimir cada nombre en MAYÚSCULAS
    //    con su posición: "N. NOMBRE"
    // ....
    for(let i=0;i<nombres.length;i++){
        console.log(`${i+1}`+"."+`${nombres[i].toUpperCase()}`)
    };

    // Imprime el separador "---"
    // ....
    console.log("---")

    // 2. Usa un bucle for para contar cuántos nombres empiezan
    //    con la letra recibida (sin distinguir mayúsculas/minúsculas)
    //    Imprime: "Nombres que empiezan con 'X': N"
    // ....
    let count = 0 ; 
    for(let i=0 ;i<nombres.length;i++){
        
        if(nombres[i].split('')[0]==busqueda){
            count+=1;
        };
    };
     console.log(`Nombres que empiezan con '${busqueda.toUpperCase()}': ${count}`);

    // 3. Usa un bucle for para encontrar el nombre más largo
    //    Si hay empate, conserva el primero encontrado
    //    Imprime: "Nombre más largo: nombre"
    // ....
    count = nombres.length;
    let mayor = "";
    for(let i = 0; i<nombres.length; i++){
        if(count < nombres[i].length){
            mayor = nombres[i]
        }
    };
    
    console.log(`Nombre más largo: ${mayor}`);

    // 4. Usa un bucle for para contar cuántos nombres
    //    tienen más de 5 caracteres
    //    Imprime: "Nombres con más de 5 letras: N"
    // ...
    count = 0;
    for(let i = 0; i<nombres.length; i++){
        if(nombres[i].length>5){
            count+=1;
        }
    };
    console.log(`Nombres con más de 5 letras: ${count}`);
};

