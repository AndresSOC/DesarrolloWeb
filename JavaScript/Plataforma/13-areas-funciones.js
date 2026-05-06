// ── Lectura y parseo de entrada (NO modificar) ──────────────────
const partes = [4,6];
const figura  = "triangulo";

// ── Implementa las siguientes funciones ─────────────────────────

// Función 1: areaCirculo(radio)
// Debe calcular y RETORNAR el área de un círculo: π * r²
// Usa Math.PI para el valor de π
function areaCirculo(radio) {
    // ....
    return Math.PI*radio^2;
}

// Función 2: areaRectangulo(base, altura)
// Debe calcular y RETORNAR el área de un rectángulo: base * altura
function areaRectangulo(base, altura) {
    // ....
    return base *altura;

}

// ── Llamadas a las funciones (NO modificar) ──────────────────────
if (figura === 'circulo') {
    const radio = partes;
    console.log(areaCirculo(radio));
} else if (figura === 'rectangulo') {
    const base   = partes[0];
    const altura = partes[1];
    console.log(areaRectangulo(base, altura));
} else {
    console.log("Figura no válida");
}