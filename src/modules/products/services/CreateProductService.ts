import { AppError } from '@shared/errors/appError'
import { Product } from '../entities/Product'
import { ProductsRepository } from '../repositories/productsRepository'

type IRequest = {
	name: string,
	price: number,
	quantity: number
}

export class CreateProductService {
	async execute(data: IRequest): Promise<Product | null> {

		const productsCustomRepository = new ProductsRepository()
		const alreadyExists = await productsCustomRepository.findByName(data.name)

		if (alreadyExists) {
			throw new AppError("Product with this name already exists")
		}

		const product = productsCustomRepository.create(data)

		await productsCustomRepository.save(product);

		return product

	}
}