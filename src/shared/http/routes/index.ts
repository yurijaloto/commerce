import { productsRouter } from '@modules/products/routes/productsRoutes'
import { isAuthenticathed } from '@modules/users/middlewares/isAuthMiddleware'
import { usersRouter } from '@modules/users/routes/usersRoutes'
import { ordersRouter } from '@modules/orders/routes/ordersRoutes'
import { Router } from 'express'

export const router = Router()

router.use('/products', isAuthenticathed, productsRouter)
router.use('/users', usersRouter)
router.use('/orders', ordersRouter)