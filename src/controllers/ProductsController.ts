import { CreateProductService } from "@modules/products/services/CreateProductService";
import { DeleteProductService } from "@modules/products/services/DeleteProductService";
import { ListProductService } from "@modules/products/services/ListProductService";
import { ShowOneProductService } from "@modules/products/services/ShowOneProductService";
import { UpdateProductService } from "@modules/products/services/UpdateProductService";
import { Product } from "@modules/products/typeorm/entities/Product";
import { AppError } from "@shared/errors/appError";
import { Request, Response, NextFunction, ErrorRequestHandler } from 'express'

export class ProductsController {
	public async createProduct(request: Request, response: Response, next: NextFunction): Promise<Response> {
		const createProduct = new CreateProductService()

		const product = await createProduct.execute(request.body)

		if (!product) {
			throw new Error("Something went wrong!")
		}

		return response.status(201).json(product)
	}

	public async listProducts(request: Request, response: Response, next: NextFunction): Promise<Response> {
		const listProducts = new ListProductService()

		const products = await listProducts.execute()

		return response.status(200).json(products)

	}

	public async showProduct(request: Request, response: Response, next: NextFunction): Promise<Response> {
		const showProduct = new ShowOneProductService()

		const product = await showProduct.execute(request.params.id)

		return response.status(200).json(product)

	}

	public async updateProduct(request: Request, response: Response, next: NextFunction): Promise<Response> {
		const { name, price, quantity } = request.body
		const { id } = request.params
		const updateProduct = new UpdateProductService()

		const updatedProduct = await updateProduct.execute({
			id,
			name,
			price,
			quantity
		})

		return response.status(200).json(updatedProduct)
	}

	public async deleteProduct(request: Request, response: Response, next: NextFunction): Promise<Response> {
		const deleteProduct = new DeleteProductService()

		const product = await deleteProduct.execute(request.params.id)

		return response.status(200).json(product)

	}
}