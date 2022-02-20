import IUserReadOnlyRepository from "../application/repositories/IUserReadOnlyRepository";
import IUserDto from "../usecase/Users/IUserDto";
import users from './FakeUserData';

export default class FakeUserReadOnlyRepository implements IUserReadOnlyRepository {

	constructor() {
	}

	fetchAll(): Promise<IUserDto[]> {
		throw new Error('Method not implemented.');
	}
	fetch(userDto: IUserDto): Promise<IUserDto> {
		return new Promise(async (resolve, reject) => {
			let foundUser = users.find(x => x.username == userDto.username);
			
			if(!foundUser){
				reject('Could not find user');
			} else{
				let newUserDto: IUserDto = {
					id: foundUser.id,
					username: foundUser.username,
					password: foundUser.password,
					name: foundUser.name,
					email: foundUser.email
				}
	
				resolve(foundUser);
			}
			
		})
	}
}