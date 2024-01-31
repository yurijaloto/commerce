import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm'
import "reflect-metadata"
import { Order } from '@modules/orders/entity/Order'

@Entity('customers')
export class Customer {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@Column('varchar')
	name: string

	@Column('varchar')
	email: string

	// @OneToMany(() => Order, (order) => order.customer)
	// orders: Order[]

	@CreateDateColumn()
	created_at: Date

	@UpdateDateColumn()
	updated_at: Date
}