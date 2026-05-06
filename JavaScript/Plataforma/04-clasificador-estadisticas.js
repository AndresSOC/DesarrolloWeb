/*  Clasificador de Calificaciones con Estadísticas */

const calificaciones = [95, 73, 45, 60, 85, 101, -5, 78];
const categoria = [];
// Use un bucle for para recorrer el arreglo de calificaciones

let contador = 0;
let suma = 0;

for (let i = 0; i < calificaciones.length; i++) {
    const cal = calificaciones[i];
    
    if(cal >= 90 && cal <100){
        categoria[i] = "Excelente";
        contador+=1;
        suma+=calificaciones[i];
    }else if( cal >= 70 && cal <=89){
        categoria[i]="Aprobado";
        contador+=1;
        suma+=calificaciones[i];
    }else if(cal >=50 && cal <=69){
        categoria[i]="Suficiente";
        contador+=1;
        suma+=calificaciones[i];
    }else if(cal >= 0 && cal <= 49){
        categoria[i]="Reprobado";
        contador+=1;
        suma+=calificaciones[i];
    }else{
        categoria[i]="Calificación inválida";
    }
};

// cosonle.log("Calificación: Categoría");
// Ejemplo:
// 95: Excelente
// 73: Aprobado
// ...

for(let i = 0; i < categoria.length;i++){
    console.log(`${calificaciones[i]}: ${categoria[i]}`)
};

// Actualice acumuladores solo si la calificación es válida
// (por ejemplo: suma, contador, máximo y mínimo)
// ....

// Imprima el separador y el resumen estadístico
// ---
console.log("---");
// Total de calificaciones válidas: X
console.log("Total de calificaciones válidas: "+`${contador}`);
// Promedio: X.XX   (2 decimales, solo con calificaciones válidas)
promedio = suma/contador;
console.log("Promedio: "+`${promedio.toFixed(2)}`);
// Calificación más alta: X
let maximo = 0;
for(let i=0; i< calificaciones.length;i++){
    if(calificaciones[i]<=100){
        if(maximo<calificaciones[i]){
            maximo = calificaciones[i];
        }
    }
};
console.log("Calificación más alta: "+`${maximo}`)
// Calificación más baja: X
// ....
let minimo = maximo;
for(let i=0; i< calificaciones.length;i++){
    if(0<=calificaciones[i]){
        if(minimo>calificaciones[i]){
            minimo = calificaciones[i];
        }
    }
};
console.log("Calificación más baja: "+`${minimo}`)
