// Para averiguar rutas o recuperar una extensión
// crear rutas absolutas

const path = require('node:path')

// unir rutas con path.join
//`./content/subfolder/test.txt` // Prohibido por el sistema operativo
// Las barras en:
// --> unix /
// --> windows \

console.log(path.sep) // Barra separadora de carpetas según nuestro SO

// unir rutas con path.join (se ajusta al sistema operativo)
const filePath = path.join('content','subfolder','test.txt')
console.log(filePath)

// para obtener el nombre de un archivo en una ruta
const base = path.basename('/tmp/jona-secret-files/password.txt')
console.log(base)

// para obtener el nombre de un archivo en una ruta sin la extensión
const fileName = path.basename('/tmp/jona-secret-files/password.txt','.txt')
console.log(fileName)

// para obtener la extensión
const extension = path.extname('image.jpg')
console.log(extension)

// Otro ejemplo (aun con puntos te da la extension correcta)
const extension2 = path.extname('my.super.image.jpg')
console.log(extension2)