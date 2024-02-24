import { ICustomerRepository } from './../../modules/customers/domain/repositories/ICustomerRepository'
import { CustomersRepository } from './../../modules/customers/infra/typeorm/repositories/CustomerRepository'
import { IOrdersRepository } from './../../modules/orders/domain/repositories/IOrdersRepository'
import { OrdersRepository } from './../../modules/orders/infra/typeorm/repositories/orderRepository'
import { IProductsRepository } from './../../modules/products/domain/repositories/IProductsRepository'
import { ProductsRepository } from './../../modules/products/infra/typeorm/repositories/productsRepository'
import { container } from 'tsyringe'

container.registerSingleton<IOrdersRepository>('ordersRepositoryKey', OrdersRepository)
container.registerSingleton<ICustomerRepository>('customersRepositoryKey', CustomersRepository)
container.registerSingleton<IProductsRepository>('productsRepositoryKey', ProductsRepository)