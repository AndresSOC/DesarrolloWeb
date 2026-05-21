const edades = [15, 30, 65, 0, 25]

// Valida que todos los valores sean números enteros no negativos
// Usa Number.isInteger() para verificar que sean enteros
// Si alguno no lo es, imprime "Entrada inválida" y termina
// ....

for(let i=0;i< edades.length;i++){
    if(!Number.isInteger(edades[i])){
        console.log("Entrada inválida")
        break
    }
}

// PASO 1 — Usa array.some(elemento => condición) para verificar si alguna edad es menor a 18
// Guarda el resultado (true/false) en: hayMenores
// ....
const hayMenores = edades.some(edad => edad < 18)


// PASO 2 — Usa some() para verificar si alguna edad es mayor a 60
// Guarda el resultado (true/false) en: hayAdultosMayor
// ....
const hayAdultosMayor = edades.some(edad => edad > 30 )

// PASO 3 — Usa some() para verificar si alguna edad es exactamente 0
// Guarda el resultado (true/false) en: hayRecienNacido
// ....
const hayRecienNacido = edades.some(edad => edad ==0 )

// Imprime los resultados con el formato:
// "Hay menores de edad: true/false"
// "Hay adultos mayores: true/false"
// "Hay recién nacidos: true/false"
// ....

console.log(`Hay menores de edad: ${hayMenores}`)
console.log(`Hay adultos mayores: ${hayAdultosMayor}`)
console.log(`Hay recién nacidos: ${hayRecienNacido}`)

