
/* Funcion para cambiar el titulo */
const cambiarTitulo = () => {
    const titulo = document.getElementById("titulo-pagina");
    if(titulo.textContent === 'DiseñoPro') {
        titulo.textContent = 'Diseño Más Pro';
        titulo.style.color = '#3498db';
    } else {
        titulo.textContent = 'DiseñoPro';
        titulo.style.color = ''; // Restableciendo el valor original
    }
}
/* Función para el contados de visitas */
let vistas = 0;

const incrementarContador = () =>{
    vistas++;
    const span = document.getElementById('contador-visitas');
    span.textContent = vistas;
    // Aplicarle efecto
    span.style.transform = 'scale(1.5)';
    span.style.display = 'inline-block';
    span.style.transition = 'transform 0.2s'
    // Volver a la escala original
    setTimeout(()=> span.style.transform = 'scale(1)',200); 
}

/* Función para resaltar articulos */
const resaltarArticulo = () => {
    const primerArticulo = document.querySelector('.article');
    primerArticulo.classList.toggle('resaltado');

    const h2 = primerArticulo.querySelector('h2');
    if(primerArticulo.classList.contains('resaltado')){
        h2.textContent = '🤔 ' + h2.textContent.replace('🤔 ', '');
    }else{
        h2.textContent = h2.textContent.replace('🤔 ', '');
    }
}
/* Función para colorear destacados */
const colorearDestacados = () => {
    const destacados = document.querySelectorAll('.featured-item');
    destacados.forEach((elemento) => {
        elemento.classList.toggle('coloreado');
    })
}
 
 document.addEventListener('DOMContentLoaded', () => {
    // Cuadros de dialogo
    /*const nombre = prompt("¿Como te llamas?");
    alert(`Hola ${nombre}`);
    const resultado = confirm("¿Estas seguro de lo que quieres hacer?");
    if(resultado){
        alert("Bien");
    } else {
        alert("Que Mal");
    }*/
 
    const botonOscuro = document.getElementById("darkToggle");
    const body = document.body;

    botonOscuro.addEventListener('click', () => {
        body.classList.toggle('oscuro');

        if (body.classList.contains('oscuro')) {
            botonOscuro.textContent = '☀️ Modo Claro';
        } else {
            botonOscuro.textContent = '🌙 Modo Oscuro';
        }
    })

/*     const btnCambiarTitulo = document.getElementById('btn-titulo');
    btnCambiarTitulo.addEventListener('click', cambiarTitulo);
      
    const btnContador = document.getElementById('btn-contador');
    btnContador.addEventListener('click', incrementarContador);

    const btnResaltar = document.getElementById('btn-resaltar');
    btnResaltar.addEventListener('click',resaltarArticulo);

    const btnDestacados = document.getElementById('btn-destacados');
    btnDestacados.addEventListener('click',colorearDestacados);
     */

    const acciones = {
        'btn-titulo':cambiarTitulo,
        'btn-contador':incrementarContador,
        'btn-resaltar':resaltarArticulo,
        'btn-destacados':colorearDestacados
    }
    Object.keys(acciones).forEach((id) => {
        const boton = document.getElementById(id);
        if(boton) boton.addEventListener('click', acciones[id]);
    })
})
