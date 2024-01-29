import { appDataSource } from "@config/typeorm"
import { Customer } from "../entities/Customer"

type IRequest = {
	id: string
	name: string,
	email: string
}

export class CustomersRepository {

	private customersRepository = appDataSource.getRepository(Customer)

	public async findByEmail(email: string): Promise<Customer | null> {
		return await this.customersRepository.findOne({
			where: {
				email: email
			}
		})
	}

	public async findByName({ name }: IRequest): Promise<Customer | null> {
		return await this.customersRepository.findOne({
			where: {
				name,
				//name: name
			}
		})
	}

	public async createCustomer({name, email}: IRequest): Promise<Customer | null> {
		const customer = this.customersRepository.create({
			name,
			email
		})

		await this.customersRepository.save(customer)

		return customer
	}

	public async find(): Promise<Customer[] | null> {
		return await this.customersRepository.find()
	}

	public async findById(id: string): Promise<Customer | null> {
		return await this.customersRepository.findOne({
			where: {
				id: id
			}
		})
	}

	public async remove(customers: Customer[]): Promise<Customer[]> {
		return await this.customersRepository.remove(customers)
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