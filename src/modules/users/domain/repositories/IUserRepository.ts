import { IRequest } from "../models/IRequest";
import { User } from "./../../..//users/infra/typeorm/entities/User";

export interface IUSerRepository {
	findByEmail(email: string): Promise<User | null>;
	findByName(name: string): Promise<User | null>;
	findById(id: string): Promise<User | null>;
	create(data: IRequest): User;
	save(user: User): Promise<void | null>;
	find(): Promise<User[] | null>;
	remove(users: User[]): Promise<User[]>;
}