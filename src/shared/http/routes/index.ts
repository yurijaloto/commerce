import { productsRouter } from '@modules/products/routes/productsRoutes'
import { usersRouter } from '@modules/users/routes/usersRoutes'
import { Router } from 'express'

export const router = Router()

router.use('/products', productsRouter)
router.use('/users', usersRouter)