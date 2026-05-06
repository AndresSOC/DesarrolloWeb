const { error } = require('node:console')
const fs = require('node:fs/promises')
const { text } = require('node:stream/consumers')

// Lectura asíncrona

console.log('Leyendo el primer archivo ...')
fs.readFile('./archivo.txt', 'utf-8')
    .then(text =>{
        console.log(text)
    })
    .catch(error => {
        if(error){
            console.log("Error: ",error);
        return;
        }
    })


//console.log('Hacer cosas mientras lee el archivo ...'); 
// Esto se bloquea hasta leer el primer archivo

console.log('Leyendo el segundo archivo ...')
fs.readFile('./archivo2.txt', 'utf-8')
    .then(text =>{
        console.log(text)
    })
    .catch(error => {
        if(error){
            console.log("Error: ",error);
        return;
        }
    })
// La lectura de archivos es algo que debería hacerse asíncronamente
