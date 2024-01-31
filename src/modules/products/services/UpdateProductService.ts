import { AppError } from "@shared/errors/appError";
import { Product } from "../entities/Product";
import { ProductsRepository } from "../repositories/productsRepository";

type IRequest = {
	id: string,
	name: string,
	price?: number,
	quantity?: number
}

export class UpdateProductService {
	public async execute({id, name, price, quantity}: IRequest): Promise<Product> {

		const productsRepository = new ProductsRepository()
		const product =  await productsRepository.findOne(id)

		if (!product) {
			throw new AppError("Product not found")
		}

		const alreadyExists = await productsRepository.findByName(name)

		//The name exists and it's from another product
		if (alreadyExists && name !== product.name) {
			throw new AppError("Product with this name already exists")
		}

		if (price) {
			product.price = price
		}

		if (quantity) {
			product.quantity = quantity
		}

		product.name = name

		await productsRepository.save(product)

		return product
	}
}