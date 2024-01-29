import { AppError } from "@shared/errors/appError";
import { OrdersRepository } from "../typeorm/repositories/orderRepository";
import { Order } from "../typeorm/entity/Order";

interface IRequest {
	id: string
}

export class ShowOrderService {
	public async execute({id}: IRequest): Promise<Order | AppError> {
		const ordersRepository = new OrdersRepository()
		const order =  await ordersRepository.findById(id)

		if (!order) {
			throw new AppError("Order not found")
		}

		return order
	}
}