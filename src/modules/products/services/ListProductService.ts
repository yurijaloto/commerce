import { Product } from "../typeorm/entities/Product";
import { ProductsRepository } from "../typeorm/repositories/productsRepository";

export class ListProductService {
	public async execute(): Promise<Product[] | null> {
		// let products: Array<Product> = []
		const productsRepository = new ProductsRepository()
		const products =  await productsRepository.find()

		return products
	}
}