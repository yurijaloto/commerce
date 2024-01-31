import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToOne, JoinColumn } from 'typeorm'
import "reflect-metadata"
import { OrdersProducts } from '../../orders/entity/OrdersProducts'

@Entity('products')
export class Product {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@Column('varchar')
	name: string

	@Column('decimal')
	price: number

	@Column('int')
	quantity: number

	@OneToMany(() => OrdersProducts, ordersProducts => ordersProducts.product)
	order_products: OrdersProducts[]

	@CreateDateColumn()
	created_at: Date

	@UpdateDateColumn()
	updated_at: Date
}