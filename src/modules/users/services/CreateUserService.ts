import { AppError } from '@shared/errors/appError'
import { User } from '../infra/typeorm/entities/User'
import { UsersRepository } from '../infra/typeorm/repositories/usersRepository'
import bcrypt from 'bcryptjs'
import { IRequest } from '../domain/models/IRequest'

export class CreateUserService {
	async execute({ id, name, age, email, password, avatar }: IRequest): Promise<User | null | AppError> {

		const usersRepository = new UsersRepository()
		const userWithProvidedEmail = await usersRepository.findByEmail(email)

		if (userWithProvidedEmail) {
			throw new AppError("Email already in use!")
		}

		const hashedPassword = await bcrypt.hash(password, 8)

		const user = usersRepository.create({
			id,
			name,
			email,
			password: hashedPassword,
			age,
			avatar
		})

		await usersRepository.save(user);

		return user

	}
}