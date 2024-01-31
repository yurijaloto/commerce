import { ProductsRepository } from "@modules/products/repositories/productsRepository"
import { AppError } from "@shared/errors/appError"
import { CustomersRepository } from "@modules/customers/typeorm/repositories/CustomerRepository"
import { Product } from "../../products/entities/Product"

interface IProduct {
	product_id: string,
	price: number,
	quantity: number
}

interface IRequest {
	customer_id: string,
	products: IProduct[]
}

interface IResponse {
	doesntExists: Array<IProduct>
	notEnoughOnStock: Array<Product>
	filteredProducs: Array<Product>
}

export class ValidateOrderService {

	public async execute({customer_id, products}: IRequest): Promise<IResponse | AppError> {

		const customersRepository = new CustomersRepository
		const productsRepository = new ProductsRepository()

		const customer = await customersRepository.findById(customer_id)
		if (!customer) {
			throw new AppError("Customer doesn't exists!")
		}

		const doesntExists = []
		const notEnoughOnStock = []
		const filteredProducs = []

		for (const product of products) {
			const individualProduct = await productsRepository.findById(product.product_id)

			if (!individualProduct) {
				doesntExists.push(product)
			}

			else if (product.quantity > individualProduct.quantity) {
				notEnoughOnStock.push(individualProduct)
			}

			else {
				filteredProducs.push(individualProduct)
			}
		}

		return {
			doesntExists,
			notEnoughOnStock,
			filteredProducs
		}
	}
}