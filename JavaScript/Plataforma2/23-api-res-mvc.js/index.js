// Punto de entrada del servidor — index.js
// ─────────────────────────────────────────
// Importa express
import express from "express";

// Importa el router de productos desde './routes/productos.js'
import router from './routes/productos.js';


// Crea la aplicación Express
const app = express();


// Middleware para parsear JSON
app.use(express.json());


// Monta el router en la ruta base '/productos'
app.use('/productos', router);

// Inicia el servidor en el puerto 3000
// Imprime: "Servidor escuchando en puerto 3000"
const servidor = app.listen(0,()=>{
    console.log("Servidor escuchando en puerto"+
    servidor.address.port());
    
})


