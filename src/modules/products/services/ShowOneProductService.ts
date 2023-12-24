import { AppError } from "@shared/errors/appError";
import { Product } from "../typeorm/entities/Product";
import { ProductsRepository } from "../typeorm/repositories/productsRepository";

// type IRequest = {
// 	id: string,
// 	price: number,
// 	quantity: number
// }

export class ShowOneProductService {
	public async execute(id: string): Promise<Product> {
		// let products: Array<Product> = []
		const productsRepository = new ProductsRepository()
		const product =  await productsRepository.findOne(id)

		if (!product) {
			throw new AppError("Product not found")
		}

		return product
	}
}