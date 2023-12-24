import { Router } from 'express'
import { ProductsController } from 'src/controllers/ProductsController'

export const productsRouter = Router()
const productsController = new ProductsController()

productsRouter.post('/', productsController.createProduct)
productsRouter.get('/', productsController.listProducts)
productsRouter.get('/:id', productsController.showProduct)
productsRouter.patch('/:id', productsController.updateProduct)
productsRouter.delete('/:id', productsController.deleteProduct)

// module.exports = {
// 	productsRouter
// }