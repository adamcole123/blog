import IUserWriteOnlyRepository from "../application/repositories/IUserWriteOnlyRepository";
import User from "../domain/User";
import users from './FakeUserData';
import IUserDto from './../usecase/Users/IUserDto';
import bcrypt from 'bcryptjs';
import IBlogWriteOnlyRepository from "../application/repositories/IBlogWriteOnlyRepository";

export default class FakeUserWriteOnlyRepository implements IUserWriteOnlyRepository {
	create(user: IUserDto): Promise<IUserDto> {
		return new Promise((resolve, reject) => {
			if(users.find(x => x.username == user.username)){
				reject('Existing user already has that username')
			}

			users.push(new User(
				`test${users.length + 1}_id`,
				user.username,
				bcrypt.hashSync(user.password, bcrypt.genSaltSync(10)),
				user.name,
				user.email
			))
			
			resolve(user)
		})
	}
}