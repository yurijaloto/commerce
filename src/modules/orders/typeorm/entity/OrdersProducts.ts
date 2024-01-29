import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm'
import "reflect-metadata"
import { Product } from '../../../../modules/products/typeorm/entities/Product'
import { Order } from './Order'

@Entity('orders_products')
export class OrdersProducts {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@Column('decimal')
	price: number

	@Column('int')
	quantity: number

	@ManyToOne(() => Product, product => product.order_products)
	@JoinColumn({name: 'product_id'})
	product: Product

	@ManyToOne(() => Order, order => order.order_products)
	@JoinColumn({name: 'order_id'})
	order: Order

	@CreateDateColumn()
	created_at: Date

	@UpdateDateColumn()
	updated_at: Date
}