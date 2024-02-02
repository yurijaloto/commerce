import "reflect-metadata"
import { DataSource } from "typeorm"
//TODO: improve imported files
import { productsMigration, usersMigration, customersMigration, ordersMigration, addCustomerIdToOrders, ordersProductsMigration,addOrderIdToOrdersProducts, addProductIdToOrdersProducts } from './migrations'

import { Product } from "../../../modules/products/infra/typeorm/entities/Product"
import { User } from "../../../modules/users/infra/typeorm/entities/User"
import { Customer } from "../../../modules/customers/infra/typeorm/entities/Customer"
import { Order } from "../../../modules/orders/infra/typeorm/entity/Order"
import { OrdersProducts } from "../../../modules/orders/infra/typeorm/entity/OrdersProducts"

export const appDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "testing",
    database: "sellingapi",
    // synchronize: true,
    // logging: false,
    entities: [
			Product,
			User,
			Customer,
			Order,
			OrdersProducts
		],
    migrations: [
			productsMigration,
			usersMigration,
			customersMigration,
			ordersMigration,
			addCustomerIdToOrders,
			ordersProductsMigration,
			addOrderIdToOrdersProducts,
			addProductIdToOrdersProducts
		]
})