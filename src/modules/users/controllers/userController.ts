import { Request, Response, NextFunction } from 'express'
import { CreateUserService } from '../services/CreateUserService'
import { ListUsersService } from '../services/ListUsersService'
import { AppError } from '@shared/errors/appError'

export class UserController {
	public async createUser(request: Request, response: Response): Promise<Response> {

		const createUserService = new CreateUserService()

		const { email, password } = request.body

		if (!email || !password) {
			throw new AppError("Email or password not provided")
		}

		const user = await createUserService.execute(request.body)

		if (!user) {
			throw new AppError("Something went wrong!")
		}

		return response.status(201).json(user)

	}

	public async listUsers(request: Request, response: Response, next: NextFunction): Promise<Response> {
		const listUsersService = new ListUsersService()

		const users = await listUsersService.execute()

		return response.status(200).json(users)
	}
}