import { Product } from "../entities/Product";
import { ProductsRepository } from "../repositories/productsRepository";

export class ListProductService {
	public async execute(): Promise<Product[] | null> {
		// let products: Array<Product> = []
		const productsRepository = new ProductsRepository()
		const products =  await productsRepository.find()

		return products
	}
}