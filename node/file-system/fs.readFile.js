const fs = require('node:fs')

// Lectura síncrona

// const text = fs.readFileSync('./archivo.txt') // Devuelve un buffer de memoria
                                              // (esta informacion no se va a entender)
// Para convertirlo a algo que podamos entender:

console.log('Leyendo el primer archivo ...')
const text = fs.readFileSync('./archivo.txt', 'utf-8')

console.log(text)

console.log('Hacer cosas mientras lee el archivo ...'); 
// Esto se bloquea hasta leer el primer archivo

console.log('Leyendo el segundo archivo ...')
const secontText = fs.readFileSync('./archivo2.txt', 'utf-8')

console.log(secontText)

// La lectura de archivos es algo que debería hacerse asíncronamente
