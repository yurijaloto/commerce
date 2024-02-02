import { Request, Response, NextFunction } from 'express'
import { AppError } from '@shared/errors/appError'
import { LoginUserService } from '../../services/LoginUserService'

export class AuthController {
	public async loginUser(request: Request, response: Response): Promise<Response> {
		const authUserService = new LoginUserService()

		const { email, password } = request.body

		if (!email || !password) {
			throw new AppError("Invalid sent data!")
		}

		const loggedUser = await authUserService.execute({ email, password })

		return response.status(200).json(loggedUser)
	}
}