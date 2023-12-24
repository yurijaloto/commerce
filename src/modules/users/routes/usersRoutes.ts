import { Router } from 'express'
import { UserController } from '../controllers/userController'

export const usersRouter = Router()
const usersController = new UserController()

usersRouter.post('/', usersController.createUser)
usersRouter.get('/', usersController.listUsers)