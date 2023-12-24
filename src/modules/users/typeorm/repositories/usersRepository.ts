import { appDataSource } from "@config/typeorm"
import { User } from "../entities/User"

type IRequest = {
	id: string
	name: string,
	email: string,
	password: string,
	age?: number,
	avatar?: string
}

export class UsersRepository {

	private usersRepository = appDataSource.getRepository(User)

	public async findByEmail(email: string): Promise<User | null> {
		return await this.usersRepository.findOne({
			where: {
				name: email
			}
		})
	}

	public async findByName({ name }: IRequest): Promise<User | null> {
		return await this.usersRepository.findOne({
			where: {
				name,
				//name: name
			}
		})
	}

	public create(data: IRequest): User {
		return this.usersRepository.create(data)
	}

	public async save(data: User): Promise<void | null> {
		await this.usersRepository.save(data)
	}

	public async find(): Promise<User[] | null> {
		return await this.usersRepository.find()
	}

	public async findById({ id }: IRequest): Promise<User | null> {
		return await this.usersRepository.findOne({
			where: {
				id: id
			}
		})
	}

	public async remove(users: User[]): Promise<User[]> {
		return await this.usersRepository.remove(users)
	}

	// public async update(options: any): Promise<Product | null> {
	// 	return await this.productsRepository.update(options.id, )
	// }

}

// export const productsRepository = appDataSource.getRepository(Product)

// export async function findByName(name: string): Promise<Product | null> {
// 	return await productsRepository.findOne({
// 		where: {
// 			name: name
// 		}
// 	})
// }