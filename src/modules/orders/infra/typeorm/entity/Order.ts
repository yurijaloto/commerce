import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm'
import "reflect-metadata"
import { Customer } from '../../../../customers/infra/typeorm/entities/Customer'
import { Product } from '../../../../products/infra/typeorm/entities/Product'
import { OrdersProducts } from './OrdersProducts'
import { IOrder } from './../../../../orders/domain/models/IOrder'

@Entity('orders')
export class Order implements IOrder {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@ManyToOne(() => Customer)
	@JoinColumn({name: 'customer_id'})
	customer: Customer

	@OneToMany(() => OrdersProducts, orderProducts => orderProducts.order, {cascade: true})
	order_products: OrdersProducts[]

	@CreateDateColumn()
	created_at: Date

	@UpdateDateColumn()
	updated_at: Date
}