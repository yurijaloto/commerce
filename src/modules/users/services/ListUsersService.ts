import { UsersRepository } from "../repositories/usersRepository";
import { User } from "../entities/User";

export class ListUsersService {
	private usersRepository = new UsersRepository()

	async execute(): Promise<User[] | null> {
		const users = await this.usersRepository.find()

		return users
	}
}