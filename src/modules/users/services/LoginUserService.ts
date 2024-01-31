import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { User } from '../entities/User'
import { UsersRepository } from '../repositories/usersRepository'
import { AppError } from '@shared/errors/appError'

type IRequest = {
	email: string,
	password: string
}

type IResponse = {
	user: {
		name: string,
		id: string
	},
	token: string
}

export class LoginUserService {
	async execute({ email, password }: IRequest): Promise<IResponse> {
		const usersRepository = new UsersRepository()

		const user = await usersRepository.findByEmail(email)

		if (!user) {
			throw new AppError('Email or password invalid', 401)
		}

		const isPasswordValid = bcrypt.compare(password, user.password)

		if (!isPasswordValid) {
			throw new AppError('Email or password invalid', 401)
		}

		const token = jwt.sign(
			{
				id: user.id,
				name: user.name
			},
			process.env.SECRET_KEY || '',
			{ expiresIn: '1d'
		})

		return {
			user: {
				name: user.name,
				id: user.id
			},
			token
		}
	}
}