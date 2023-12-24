import { AppError } from '@shared/errors/appError'
import { User } from '../typeorm/entities/User'
import { UsersRepository } from '../typeorm/repositories/usersRepository'

type IRequest = {
	id: string
	name: string,
	email: string,
	password: string,
	age: number,
	avatar: string
}

export class CreateUserService {
	async execute({ id, name, age, email, password, avatar }: IRequest): Promise<User | null> {

		const usersRepository = new UsersRepository()
		const userWithProvidedEmail = await usersRepository.findByEmail(email)

		if (userWithProvidedEmail) {
			throw new AppError("Email already in use!")
		}

		const user = usersRepository.create({
			id,
			name,
			email,
			password,
			age,
			avatar
		})

		await usersRepository.save(user);

		return user

	}
}