import { appDataSource } from "@config/infra/typeorm"
import { Customer } from "../entities/Customer"
import { ICustomerRepository } from "./../../../../customers/domain/repositories/ICustomerRepository"
import { Repository } from "typeorm"
import { ICreateCustomer } from "./../../../../customers/domain/models/ICreateCustomer"

export class CustomersRepository implements ICustomerRepository {

	private customersRepository: Repository<Customer>;

	constructor() {
		this.customersRepository = appDataSource.getRepository(Customer);
	}

	public async findByEmail(email: string): Promise<Customer | null> {
		return await this.customersRepository.findOne({
			where: {
				email: email
			}
		})
	}

	public async findByName(name: string): Promise<Customer | null> {
		return await this.customersRepository.findOne({
			where: {
				name,
				//name: name
			}
		})
	}

	public async createCustomer({name, email}: ICreateCustomer): Promise<Customer | null> {
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
}