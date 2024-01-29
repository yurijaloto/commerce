import { appDataSource } from "@config/typeorm"
import { Order } from "../entity/Order"
import { Customer } from "../../../customers/typeorm/entities/Customer"

type IProduct = {
	product_id: string,
	price: number,
	quantity: number
}

type IRequest = {
	customer: Customer,
	products: IProduct[]
}

export class OrdersRepository {

	private ordersRepository = appDataSource.getRepository(Order)

	public async findById(id: string): Promise<Order | null> {
		return await this.ordersRepository.findOne({
			where: {
				id: id
			}, relations: {order_products: true, customer: true}
		})
	}


	public async createOrder({ customer, products }: IRequest): Promise<Order | null> {
		const order = this.ordersRepository.create({
			customer,
			order_products: products
		})

		await this.ordersRepository.save(order)

		return order
	}

	public async find(): Promise<Order[] | null> {
		return await this.ordersRepository.find()
	}

	public async remove(orders: Order[]): Promise<Order[]> {
		return await this.ordersRepository.remove(orders)
	}

}