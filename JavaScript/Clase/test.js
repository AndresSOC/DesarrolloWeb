function suma(a,b){
    return a+b
}

console.log(suma(3,4))

const suma1 = (a,b) => a+b;

console.log(suma1(5,6)) 


const doble = x => x*2;

console.log(doble(8))

const dividir = (a,b) => {
    if (b===0) return 'n/a'
    else return a /b
}

console.log(dividir(10, 2))
console.log(dividir(5, 0))

//Objeto global en Node.js y Navegador
    console.log(this === global)


    //Ejemplo
this.nombre = "Andres"

const usuario = {
    nombre: "Paco",
    saludarTradicional: function(){
        console.log("Hola, soy " + this.nombre)
    },
    saludarflecha: () => {
        console.log("Hola, soy " + usuario.nombre)
    }
}


usuario.saludarTradicional()
usuario.saludarflecha()

// funciones call backs

function saludar(){
    console.log("Hola");
}

function ejecutar(callback){
    callback()
}

ejecutar(saludar)

//Arreglos

let num = [1,2,3,4,5,6,7,8,9,10]

num.forEach(function(num){
    console.log(num)
})

num.forEach(num => {
    console.log(num)
})

//suma
let x=0;
num.forEach(num => {
    x+=num;
})

console.log('la suma es: ${x}' )

num.forEach((num,indice,array) => {
    console.log('Posición: ${indice+1}: ${num}')
})

//Transformar elementos
const cuadrados = num.map(num => Math.pow(num,2))
console.log(cuadrados)

//Filtrar elementos

const mayoresaCinco = num.filter(num => num > 5);
console.log(mayoresaCinco)

// Reducir a un solo valor

const sumaTotal = num.reduce((acc,num)=>{
    return acc+num
},0)

console.log(sumaTotal)