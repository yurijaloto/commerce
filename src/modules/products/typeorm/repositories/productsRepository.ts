import { appDataSource } from "@config/typeorm"
import { Product } from "../entities/Product"

type IRequest = {
	name: string,
	price: number,
	quantity: number
}

export class ProductsRepository {

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

	public async findOne(id: any): Promise<Product | null> {
		return await this.productsRepository.findOne({
			where: {
				id: id
			}
		})
	}

	public async remove(products: Product[]): Promise<Product[]> {
		return await this.productsRepository.remove(products)
	}

	// public async update(options: any): Promise<Product | null> {
	// 	return await this.productsRepository.update(options.id, )
	// }

}

// export const productsRepository = appDataSource.getRepository(Product)

// export async function findByName(name: string): Promise<Product | null> {
// 	return await productsRepository.findOne({
// 		where: {
// 			name: name
// 		}
// 	})
// }