// ─────────────────────────────────────────────
// Descarga paralela de archivos con callbacks
// ─────────────────────────────────────────────

// Función: descargarArchivo(nombre, tiempo, callback)
// Puede ser function declaration o arrow function
// Usa setTimeout con el tiempo recibido como parámetro
// Dentro del setTimeout:
//   - Imprime: "Descargando: " + nombre
//   - Llama a callback() para notificar que terminó
// ....
function descargarArchivo(nombre, tiempo, callback){
    setTimeout(function(){
        console.log("Descargando: "+nombre);
        callback(nombre);
    },tiempo);
};
// Contador para saber cuántas descargas han terminado
// Declara: let completadas = 0;
// Declara: const total = 3;
// ....
let completadas = 0;
const total = 3;

// Función alTerminar() — se llama cada vez que termina una descarga
// Puede ser function declaration o arrow function
// Incrementa el contador de completadas
// Cuando completadas === total imprime:
//   "✅ Todas las descargas completadas"
// ....
const alTerminar = (nombre) => 
    ++completadas === 3 ? 
    console.log("✅ Todas las descargas completadas") : null;

// Inicia las tres descargas EN PARALELO (al mismo nivel, no anidadas):
//   descargarArchivo("foto.jpg",   300, alTerminar);
//   descargarArchivo("música.mp3", 150, alTerminar);
//   descargarArchivo("video.mp4",  200, alTerminar);
// ....

descargarArchivo("foto.jpg",   300, alTerminar);
descargarArchivo("música.mp3", 150, alTerminar);
descargarArchivo("video.mp4",  200, alTerminar);