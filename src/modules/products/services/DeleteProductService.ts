import { AppError } from "@shared/errors/appError";
import { Product } from "../entities/Product";
import { ProductsRepository } from "../repositories/productsRepository";

export class DeleteProductService {
	public async execute(id: string): Promise<Product[] | null> {

		const productsRepository = new ProductsRepository()
		const product =  await productsRepository.findOne(id)

		if (!product) {
			throw new AppError("Product not found")
		}

		const deletedProducts = await productsRepository.remove([product])

		return deletedProducts
	}
}