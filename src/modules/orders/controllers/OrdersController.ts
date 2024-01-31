import { Request, Response } from "express";
import { ValidateOrderService } from "../services/ValidateOrderService";
import { CreateOrderService } from "../services/CreateOrderService";
import { ShowOrderService } from "../services/ShowOrderService";

export class OrdersController {

	public async validateOrder(request: Request, response: Response): Promise<Response> {
		const { customer_id, products } = request.body

		const validateOrderService = new ValidateOrderService()
		const validateReturn = await validateOrderService.execute({customer_id, products})

		return response.status(200).json(validateReturn)
	}

	public async createOrder(request: Request, response: Response): Promise<Response> {
		const { customer_id, products } = request.body

		const createOrderService = new CreateOrderService()
		const createdOrder = await createOrderService.execute({customer_id, products})

		return response.status(201).json(createdOrder)
	}

	public async showOrder(request: Request, response: Response): Promise<Response> {
		const { id } = request.params


		const showOrderService = new ShowOrderService()
		const order = showOrderService.execute({id})

		return response.status(200).json(order)
	}
}