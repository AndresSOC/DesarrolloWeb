import { productoController } from "../Controller/productos.controller.js"
import { Router } from 'express'

const router = Router()

router.get('/', productoController.getAll)
router.get('/:id', productoController.getByid)
router.post('/', productoController.create)
router.put('/:id', productoController.update)
router.delete('/:id', productoController.delete)


export default router

