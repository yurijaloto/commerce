import { Order } from "./../../../orders/infra/typeorm/entity/Order";
import {ICreateOrder} from "./../models/ICreateOrder"

export interface IOrdersRepository {
	findById(id: string): Promise<Order | null>
	createOrder({customer, products}: ICreateOrder): Promise<Order | null>
	find(): Promise<Order[] | null>
	remove(orders: Order[]): Promise<Order[]>
}