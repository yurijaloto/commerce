import { Customer } from "./../../../customers/infra/typeorm/entities/Customer";

type IProduct = {
	product_id: string,
	price: number,
	quantity: number
}

export interface ICreateOrder {
	customer: Customer,
	products: IProduct[]
}