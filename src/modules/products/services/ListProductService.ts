import { Product } from "../infra/typeorm/entities/Product";
import { ProductsRepository } from "../infra/typeorm/repositories/productsRepository";

export class ListProductService {
	public async execute(): Promise<Product[] | null> {

		const productsRepository = new ProductsRepository()
		const products =  await productsRepository.find()

		return products
	}
}