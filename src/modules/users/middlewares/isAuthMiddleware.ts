import jwt from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express'
import { User } from '../entities/User'
import { AppError } from '@shared/errors/appError'

interface AuthUserResponse {

		id: string,
		name: string,
		iat: number,
		exp: number

}

export function isAuthenticathed(request: Request, response: Response, next: NextFunction): void {

		const token = request.headers.authorization?.split(' ')[1]

		if (!token) {
			throw new AppError("Token not provided", 401)
		}

		const user = jwt.verify(token, process.env.SECRET_KEY || '') as AuthUserResponse

		if (!user) {
			throw new AppError("User not authenticated", 401)
		}

		request.user = {
			id: user.id,
			name: user.name,
			iat: user.iat,
			exp: user.exp
		}

		return next()

}