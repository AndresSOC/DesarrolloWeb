// file-system (fs)
// Modulo de los más importante a usar en Node.js

const fs = require('node:fs') // a partir de Node 16, se recomienda
                              // poner node: antes de fs (viene en la documentación)

// Obtener la información del archivo

/* En Node.js, fs.statSync() sirve para obtener información 
(metadatos) de un archivo o directorio de forma síncrona */

// Síncrono
const stats = fs.statSync('./archivo.txt')

console.log(
    stats.isFile(), // si es un archivo (fichero)
    stats.isDirectory(), // si es un directorio
    stats.isSymbolicLink(), // si es un enlace simbólico
    stats.size, // tamaño en bytes
)
