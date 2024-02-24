import { appDataSource } from "@config/infra/typeorm"
import { Product } from "../entities/Product"
import { IRequest } from "./../../../../products/domain/models/IRequest"
import { IProductsRepository } from "./../../../../products/domain/repositories/IproductsRepository"

export class ProductsRepository implements IProductsRepository {

	private productsRepository = appDataSource.getRepository(Product)

	public async findByName(name: string): Promise<Product | null> {
		return await this.productsRepository.findOne({
			where: {
				name: name
			}
		})
	}

	public create(data: IRequest): Product {
		return this.productsRepository.create(data)
	}

	public async save(data: Product): Promise<void | null> {
		await this.productsRepository.save(data)
	}

	public async find(): Promise<Product[] | null> {
		return await this.productsRepository.find()
	}

	public async findById(id: string): Promise<Product | null> {
		return await this.productsRepository.findOne({
			where: {
				id
			}
		})
	}

	// public async findOne(id: any): Promise<Product | null> {
	// 	return await this.productsRepository.findOne({
	// 		where: {
	// 			id: id
	// 		}
	// 	})
	// }

	public async remove(products: Product[]): Promise<Product[]> {
		return await this.productsRepository.remove(products)
	}

}