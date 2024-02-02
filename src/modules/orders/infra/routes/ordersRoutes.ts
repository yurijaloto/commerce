import { Router } from "express"
import { OrdersController } from "../controllers/OrdersController"
export const ordersRouter = Router()

const ordersController = new OrdersController()

ordersRouter.post('/validate', ordersController.validateOrder)
ordersRouter.post('/create', ordersController.createOrder)
ordersRouter.get('/:id', ordersController.showOrder)