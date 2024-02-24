import { productsRouter } from '../../../../modules/products/infra/routes/productsRoutes'
import { isAuthenticathed } from '../../../../modules/users/infra/middlewares/isAuthMiddleware'
import { usersRouter } from '../../../../modules/users/infra/routes/usersRoutes'
import { ordersRouter } from '../../../../modules/orders/infra/routes/ordersRoutes'
import { Router } from 'express'

export const router = Router()

router.use('/products', isAuthenticathed, productsRouter)
router.use('/users', usersRouter)
router.use('/orders', ordersRouter)