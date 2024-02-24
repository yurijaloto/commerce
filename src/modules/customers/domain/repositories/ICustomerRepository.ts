import { ICreateCustomer } from "../models/ICreateCustomer";
import { Customer } from "./../../../customers/infra/typeorm/entities/Customer";

export interface ICustomerRepository {
	findByEmail(email: string): Promise<Customer | null>;
	findByName(name: string): Promise<Customer | null>;
	createCustomer(data: ICreateCustomer): Promise<Customer | null>;
	find(): Promise<Customer[] | null>
	findById(id: string): Promise<Customer | null>;
	remove(customers: Customer[]): Promise<Customer[]>;
}