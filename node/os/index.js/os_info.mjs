// const os = require('os') // Modulo nativo para acceder
                         // a información del SO
// Desde la versión 16 de Node.js ya no es recomendable
// utilizar el nombre del modulo nativo
// la forma de usar hoy en día es
import { platform, release, arch, cpus, freemem, totalmem, uptime } from 'node:os'

console.log('Información del sistema operativo')
console.log('---------------------')

console.log('Nombre del sistema operativo:', platform())
console.log('Version del sistema operativo:', release())
console.log('Arquitectura:', arch()) // 32 o 64 bits
console.log('CPUs:', cpus()) // <--- vamos a poder escalar procesos en Node.js
console.log('Memoria libre:', freemem() / 1024 / 1024) // En MB
console.log('Memoria total:', totalmem() / 1024 / 1024) // En MB
console.log('uptime:', uptime() / 60 / 60) // ¿Cuántos horas lleva la compu encendida?
console.log('Días:', uptime() /86400) // 24 * 60  (h) * 60 (s) = 86400
