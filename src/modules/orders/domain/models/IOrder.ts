import { OrdersProducts } from "./../../../orders/infra/typeorm/entity/OrdersProducts";
import { Customer } from "./../../../customers/infra/typeorm/entities/Customer";

export interface IOrder {
	id: string;
	customer: Customer,
	order_products: OrdersProducts[],
	created_at: Date;
	updated_at: Date;
}