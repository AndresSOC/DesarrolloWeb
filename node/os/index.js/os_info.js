// const os = require('os') // Modulo nativo para acceder
                         // a información del SO
// Desde la versión 16 de Node.js ya no es recomendable
// utilizar el nombre del modulo nativo
// la forma de usar hoy en día es
const os = require('node:os')

console.log('Información del sistema operativo')
console.log('---------------------')

console.log('Nombre del sistema operativo:', os.platform())
console.log('Version del sistema operativo:', os.release())
console.log('Arquitectura:', os.arch()) // 32 o 64 bits
console.log('CPUs:', os.cpus()) // <--- vamos a poder escalar procesos en Node.js
console.log('Memoria libre:', os.freemem() / 1024 / 1024) // En MB
console.log('Memoria total:', os.totalmem() / 1024 / 1024) // En MB
console.log('uptime:', os.uptime() / 60 / 60) // ¿Cuántos horas lleva la compu encendida?
console.log('Días:', os.uptime() /86400) // 24 * 60  (h) * 60 (s) = 86400
