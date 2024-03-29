import { ProductsRepository } from "../../../modules/products/infra/typeorm/repositories/productsRepository"
import { AppError } from "@shared/errors/appError"
import { CustomersRepository } from "../../../modules/customers/infra/typeorm/repositories/CustomerRepository"
import { Product } from "../../products/infra/typeorm/entities/Product"
import { ICustomerRepository } from "./../../customers/domain/repositories/ICustomerRepository"
import { IProductsRepository } from "./../../products/domain/repositories/IProductsRepository"
import { injectable, inject } from "tsyringe"

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
@injectable()
export class ValidateOrderService {

	constructor(
		@inject('customerRepositoryKey')
		private customersRepository: ICustomerRepository,
		@inject('productsRepositoryKey')
		private productsRepository: IProductsRepository
	){

	}

	public async execute({customer_id, products}: IRequest): Promise<IResponse | AppError> {

		// const customersRepository = new CustomersRepository()
		// const productsRepository = new ProductsRepository()

		const customer = await this.customersRepository.findById(customer_id)
		if (!customer) {
			throw new AppError("Customer doesn't exists!")
		}

		const doesntExists = []
		const notEnoughOnStock = []
		const filteredProducs = []

		for (const product of products) {
			const individualProduct = await this.productsRepository.findById(product.product_id)

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