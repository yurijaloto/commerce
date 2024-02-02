import { Router } from 'express'
import { UserController } from '../controllers/userController'
import { AuthController } from '../controllers/authController'

export const usersRouter = Router()
const usersController = new UserController()
const authController = new AuthController()

usersRouter.post('/', usersController.createUser)
usersRouter.get('/', usersController.listUsers)
usersRouter.post('/login', authController.loginUser)