import { AppError } from "@shared/errors/appError";
import { OrdersRepository } from "../infra/typeorm/repositories/orderRepository";
import { Order } from "../infra/typeorm/entity/Order";
import { IOrdersRepository } from "../domain/repositories/IOrdersRepository";
import { injectable, inject } from "tsyringe"

interface IRequest {
	id: string
}
@injectable()
export class ShowOrderService {
	constructor(
		@inject('ordersRepositoryKey')
		private ordersRepository: IOrdersRepository) {
	}
	public async execute({id}: IRequest): Promise<Order | AppError> {
		// const ordersRepository = new OrdersRepository()
		const order =  await this.ordersRepository.findById(id)

		if (!order) {
			throw new AppError("Order not found")
		}

		return order
	}
}