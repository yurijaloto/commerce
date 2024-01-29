import { ProductsRepository } from "@modules/products/typeorm/repositories/productsRepository"
import { Order } from "../typeorm/entity/Order"
import { OrdersRepository } from "../typeorm/repositories/orderRepository"
import { AppError } from "@shared/errors/appError"
import { CustomersRepository } from "@modules/customers/typeorm/repositories/CustomerRepository"
import { Product } from "../../../modules/products/typeorm/entities/Product"

interface IProduct {
	product_id: string,
	price: number,
	quantity: number
}

interface IRequest  {
	customer_id: string,
	products: IProduct[]
}

export class CreateOrderService {

	public async execute({customer_id, products}: IRequest): Promise<Order | null | AppError> {

		const ordersRepository = new OrdersRepository()
		const customersRepository = new CustomersRepository
		const productsRepository = new ProductsRepository()

		const customer = await customersRepository.findById(customer_id)
		if (!customer) {
			throw new AppError("Customer doesn't exists!")
		}

		const filteredProducs: Product[] = []

		for (const product of products) {
			const individualProduct = await productsRepository.findById(product.product_id)

			if (!individualProduct) {
				throw new AppError("Product doesn't exists!")
			}

			if (product.quantity > individualProduct.quantity) {
				throw new AppError("Doesn't have enough products!")
			}

			filteredProducs.push(individualProduct)
			individualProduct.quantity -= product.quantity
			await productsRepository.save(individualProduct)
		}

		const order = await ordersRepository.createOrder({
			customer,
			products
		})

		return order

	}
}