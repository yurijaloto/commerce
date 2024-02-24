import { appDataSource } from "@config/infra/typeorm"
import { Order } from "../entity/Order"
import { IOrdersRepository } from "./../../../../orders/domain/repositories/IOrdersRepository"
import { ICreateOrder } from "./../../../domain/models/ICreateOrder"

export class OrdersRepository implements IOrdersRepository {

	private ordersRepository = appDataSource.getRepository(Order)

	public async findById(id: string): Promise<Order | null> {
		return await this.ordersRepository.findOne({
			where: {
				id: id
			}, relations: {order_products: true, customer: true}
		})
	}

	public async createOrder({ customer, products }: ICreateOrder): Promise<Order | null> {
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