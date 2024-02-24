import { Product } from "./../../../products/infra/typeorm/entities/Product";
import { Order } from "./../../../orders/infra/typeorm/entity/Order";

export interface IOrdersProducts {
	id: string;
	price: number;
	quantity: number;
	product: Product;
	order: Order;
	created_at: Date;
	updated_at: Date;
}