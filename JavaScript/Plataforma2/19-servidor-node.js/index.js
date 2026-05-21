// Importa el módulo http de Node.js usando ES Modules
// import http from 'http';
// ....

import http from 'http';

// Crea el servidor con http.createServer()
// El callback recibe (req, res) por cada petición
// Dentro del callback:
//   - Usa res.writeHead(200, { 'Content-Type': 'text/plain' })
//     para establecer el código de estado y el tipo de contenido
//   - Usa res.end('Hola Mundo') para enviar la respuesta
// Guarda el servidor en: const servidor = ...
// ....

const servidor = http.createServer((req,res) =>{
    res.writeHead(200,{ 'Content-Type': 'text/plain' })
    res.end('Hola Mundo')
});

// Pon el servidor a escuchar en el puerto 3000
// En el callback de listen imprime:
//   "Servidor escuchando en puerto 3000"
// servidor.listen(3000, () => { ... })
// ....

servidor.listen(0,()=> console.log("Servidor escuchando en puerto: "+servidor.address().port))