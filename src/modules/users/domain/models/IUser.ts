export interface IUser {
	id: string;
	name: string;
	email: string;
	age: number;
	password: string;
	avatar?: string;
	created_at: Date;
	updated_at: Date;
}