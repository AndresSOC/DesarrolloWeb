const { error } = require('node:console')
const fs = require('node:fs')
const { text } = require('node:stream/consumers')

// Lectura asíncrona

console.log('Leyendo el primer archivo ...')
fs.readFile('./archivo.txt', 'utf-8',(error,text)=>{
    if(error){
        console.log("Error: ",error);
        return;
    }
    console.log(text)
})


//console.log('Hacer cosas mientras lee el archivo ...'); 
// Esto se bloquea hasta leer el primer archivo

console.log('Leyendo el segundo archivo ...')
fs.readFile('./archivo2.txt', 'utf-8',(error,text)=>{
    if(error){
        console.log("Error: ",error);
        return;
    }
    console.log(text)
})
// La lectura de archivos es algo que debería hacerse asíncronamente
