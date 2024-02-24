import { Request, Response } from "express";
import { ValidateOrderService } from "../../services/ValidateOrderService";
import { CreateOrderService } from "../../services/CreateOrderService";
import { ShowOrderService } from "../../services/ShowOrderService";
// import { OrdersRepository } from "../typeorm/repositories/orderRepository";
// import { CustomersRepository } from "./../../../customers/infra/typeorm/repositories/CustomerRepository";
// import { ProductsRepository } from "./../../../products/infra/typeorm/repositories/productsRepository";
import "@shared/containers";
import { container } from "tsyringe";

// const ordersRepository = new OrdersRepository()
// const customersRepository = new CustomersRepository
// const productsRepository = new ProductsRepository()
export class OrdersController {

	public async validateOrder(request: Request, response: Response): Promise<Response> {
		const { customer_id, products } = request.body

		// const validateOrderService = new ValidateOrderService(customersRepository, productsRepository)
		const validateOrderService = container.resolve(ValidateOrderService)
		const validateReturn = await validateOrderService.execute({customer_id, products})

		return response.status(200).json(validateReturn)
	}

	public async createOrder(request: Request, response: Response): Promise<Response> {
		const { customer_id, products } = request.body

		// const createOrderService = new CreateOrderService(ordersRepository, customersRepository, productsRepository)
		const createOrderService = container.resolve(CreateOrderService)
		const createdOrder = await createOrderService.execute({customer_id, products})

		return response.status(201).json(createdOrder)
	}

	public async showOrder(request: Request, response: Response): Promise<Response> {
		const { id } = request.params


		// const showOrderService = new ShowOrderService(ordersRepository)
		const showOrderService = container.resolve(ShowOrderService)
		const order = showOrderService.execute({id})

		return response.status(200).json(order)
	}
}