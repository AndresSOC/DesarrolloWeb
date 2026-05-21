const contrasenas = ['Password1','Segura2X','Clave3Y']

console.log(contrasenas.length === 0)
// Valida que la entrada no esté vacía ni tenga contraseñas vacías
// Si no es válida, imprime "Entrada inválida" y termina
// ....

for(let i=0;i<=contrasenas.length;i++){
    if( contrasenas.length === 0 || contrasenas.some(c => c ===' ')){
        console.log("Entrada inválida")
        break
    }
}

// PASO 1 — Usa every() para verificar si TODAS las contraseñas
// tienen al menos 8 caracteres (usa .length)
// Guarda el resultado (true/false) en: todasLongitud
// ....
// Sintaxis básica
const todasLongitud = contrasenas.every(c => c.length >= 8)



// PASO 2 — Usa every() para verificar si TODAS las contraseñas
// contienen al menos un número (dígito del 0 al 9)
// Pista: usa /[0-9]/.test(contrasena)
// Guarda el resultado (true/false) en: todasNumero
// ....
const todasNumero = contrasenas.every(c => /[0-9]/.test(c))

// PASO 3 — Usa every() para verificar si TODAS las contraseñas
// contienen al menos una letra mayúscula (A-Z)
// Pista: usa /[A-Z]/.test(contrasena)
// Guarda el resultado (true/false) en: todasMayuscula
// ....
const todasMayuscula = contrasenas.every(c => /[A-Z]/.test(c))

// Imprime los resultados con el formato:
// "Todas tienen longitud mínima: true/false"
// "Todas tienen número: true/false"
// "Todas tienen mayúscula: true/false"

console.log(`"Todas tienen longitud mínima: ${todasLongitud}`)
console.log(`"Todas tienen numero: ${todasNumero}`)
console.log(`"Todas tienen mayúscula: ${todasMayuscula}`)
