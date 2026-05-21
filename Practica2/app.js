import { Router } from 'express'
import productoRoutes from './Routes/productos.routes.js'

app.use(express.json()); //Middlewere

app.use('/api/productos',productoRoutes)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});
