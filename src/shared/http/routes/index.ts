import { productsRouter } from '@modules/products/routes/productsRoutes'
import { isAuthenticathed } from '@modules/users/middlewares/isAuthMiddleware'
import { usersRouter } from '@modules/users/routes/usersRoutes'
import { Router } from 'express'

export const router = Router()

router.use('/products', isAuthenticathed, productsRouter)
router.use('/users', usersRouter)