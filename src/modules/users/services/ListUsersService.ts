import { UsersRepository } from "../typeorm/repositories/usersRepository";
import { User } from "../typeorm/entities/User";

export class ListUsersService {
	private usersRepository = new UsersRepository()

	async execute(): Promise<User[] | null> {
		const users = await this.usersRepository.find()

		return users
	}
}