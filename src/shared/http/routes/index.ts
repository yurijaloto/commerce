import { productsRouter } from '@modules/products/routes/productsRoutes'
import { Router } from 'express'

export const router = Router()

router.use('/products', productsRouter)