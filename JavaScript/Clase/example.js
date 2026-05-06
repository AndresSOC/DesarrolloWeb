const producto = {
    nombre:"laptopt",
    precio:1000,
    stock:20,
    disponible:true
}

console.log(producto.nombre)    

producto.categoria = "Electronicos"

console.log(producto)   

async function obtenerDatos(){
    try{
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/users')
        const usuario = await respuesta.json();
        
        //Nuevo objeto
        const infoUsuario = usuario.map(usuario => ({
            id: usuario.id,
            nombreCompleto: usuario.name,
            email: usuario.email,
            ciudad: usuario.address.city,
            empresa: usuario.company.name,
            telefono: usuario.phone
        }));
        return infoUsuario;
    }catch(error){
        console.log(`Error: ${error}`)
    }
}

const info = await obtenerDatos();
console.log(info)


const productos = [
    {id : 1,nombre:"Laptop",precio:1000,categoria:"Electronicos",stock:5},
    {id : 2,nombre:"Monitor",precio:25,categoria:"Electronicos",stock:50},
    {id : 3,nombre:"Teclado",precio:80,categoria:"Electronicos",stock:30},
    {id : 4,nombre:"Libro",precio:45,categoria:"Libro",stock:15},
    {id : 5,nombre:"Monitor",precio:300,categoria:"Electronicos",stock:8},
    {id : 6,nombre:"Libro de HTML",precio:35,categoria:"Libro",stock:20}
];

//FILTER

const electronicos = productos.filter(producto => producto.categoria === "Electronicos");
console.log(electronicos)

const productosCaros = productos.filter(producto => producto.precio > 50);
console.log(productosCaros)

const productosAltoStock = productos.filter(producto => producto.stock < 100);
console.log(productosAltoStock)

//Combinar multiples condiiones
 const productosFiltrados = productos.filter(producto =>
  producto.categoria === "Electronicos" &&
  producto.precio < 100 &&
  producto.stock > 0
 );

 const nombreProductos = productos.map(producto => producto.nombre);
 console.log(nombreProductos)

 const nuevoObjeto = productos.map(producto => ({
     id: producto.id,
     nombre: producto.nombre,
     precioConIva: (producto.precio*1.16).toFixed(3),
     disponible: producto.stock > 0
 }))

 console.log(nuevoObjeto[1])

//Validar que un valor sea numero

const num = 5;
console.log(isNaN(num))

//Formatear las cadenas

const descripciones = productos.map(producto =>
    `${producto.nombre} - ${producto.precio} (${producto.categoria})`
)
console.log(descripciones)
