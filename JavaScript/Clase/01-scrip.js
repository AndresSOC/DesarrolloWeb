function saludar(nombre){
    return `Hola ${nombre}`;
}
function despedirse(){
    return "adios";
}

function conversacion(){
    const saludo = saludar("Juan");
    const despedida = despedirse();
    return `${saludo} y ${despedida}`;
}

console.log(conversacion());

/* Temporizador */

console.log("1.inicio")

setTimeout(()=>{
    console.log("3. Timeouto ejecutando")
},10_000)
console.log("2.fin")