import { ProductsRepository } from "../../../modules/products/infra/typeorm/repositories/productsRepository"
import { Order } from "../infra/typeorm/entity/Order"
import { OrdersRepository } from "../infra/typeorm/repositories/orderRepository"
import { AppError } from "@shared/errors/appError"
import { CustomersRepository } from "../../../modules/customers/infra/typeorm/repositories/CustomerRepository"

interface IProduct {
	id: string,
	quantity: number
}

interface IOrderProducts {
	product_id: string,
	price: number,
	quantity: number
}

interface IRequest  {
	customer_id: string,
	products: IProduct[]
}

interface IOrderCreate {
	customer_id: string,
	products: IOrderProducts[]
}

export class CreateOrderService {

	public async execute({customer_id, products}: IRequest): Promise<Order | null | AppError> {

		const ordersRepository = new OrdersRepository()
		const customersRepository = new CustomersRepository
		const productsRepository = new ProductsRepository()

		//TODO: create with transaction

		const customer = await customersRepository.findById(customer_id)
		if (!customer) {
			throw new AppError("Customer doesn't exists!")
		}

		const filteredProducsToSaveOrder: IOrderProducts[] = []

		for (const product of products) {
			const individualProduct = await productsRepository.findById(product.id)

			if (!individualProduct) {
				throw new AppError("Product doesn't exists!")
			}

			if (product.quantity > individualProduct.quantity) {
				throw new AppError("Doesn't have enough products!")
			}

			individualProduct.quantity -= product.quantity
			await productsRepository.save(individualProduct)

			filteredProducsToSaveOrder.push({
				product_id: individualProduct.id,
				price: individualProduct.price,
				quantity: product.quantity
				// {product_id, quantity, price} = individualProduct
			})
		}

		const order = await ordersRepository.createOrder({
			customer,
			products: filteredProducsToSaveOrder
		})

		return order

	}
}