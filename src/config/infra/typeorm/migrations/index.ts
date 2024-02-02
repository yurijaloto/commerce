import { CreateProducts1702006111018 } from './1702006111018-CreateProducts'
import { CreateUsers1703385819459 } from './1703385819459-CreateUsers'
import { CreateCustomers1704849526657 } from './1704849526657-CreateCustomers'
import { CreateOrders1705867572085 } from './1705867572085-CreateOrders'
import { AddCustomerIdToOrders1706067499786 } from './1706067499786-AddCustomerIdToOrders'
import { CreateOrdersProducts1706066660611 } from './1706066660611-CreateOrdersProducts'
import { AddOrderIdToOrdersProducts1706068763519 } from './1706068763519-AddOrderIdToOrdersProducts'
import { AddProductIdToOrdersProducts1706068983056 } from './1706068983056-AddProductIdToOrdersProducts'

export const productsMigration = CreateProducts1702006111018
export const usersMigration = CreateUsers1703385819459
export const customersMigration = CreateCustomers1704849526657
export const ordersMigration = CreateOrders1705867572085
export const addCustomerIdToOrders = AddCustomerIdToOrders1706067499786
export const ordersProductsMigration = CreateOrdersProducts1706066660611
export const addOrderIdToOrdersProducts = AddOrderIdToOrdersProducts1706068763519
export const addProductIdToOrdersProducts = AddProductIdToOrdersProducts1706068983056

// module.exports = {
// 	productsMigration
// }