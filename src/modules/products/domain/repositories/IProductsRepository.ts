import { Product } from "./../../../products/infra/typeorm/entities/Product"
import { IRequest } from "./../../../products/domain/models/IRequest"

export interface IProductsRepository {
	findByName(name: string): Promise<Product | null>
	create(user: IRequest): Product
	save(product: Product): Promise<void | null>
	find(): Promise<Product[] | null>
	findById(id: string): Promise<Product | null>
	// findOne(): Promise<Product | null>
	remove(products: Product[]): Promise<Product[]>
}