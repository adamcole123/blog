import IUserDto from './IUserDto';
import bcrypt from 'bcryptjs';
import IUserRegisterUseCase from './IUserRegisterUseCase';
import IUserWriteOnlyRepository from '../../application/repositories/IUserWriteOnlyRepository';

export default class UserSignInUseCase implements IUserRegisterUseCase {
	userWriteOnlyRepository: IUserWriteOnlyRepository;
	bc = bcrypt;

	/**
	 *
	 */
	constructor(_userWriteOnlyRepository: IUserWriteOnlyRepository) {
		this.userWriteOnlyRepository = _userWriteOnlyRepository;
	}

	invoke(userDto: IUserDto): Promise<IUserDto> {
		return new Promise(async (resolve, reject) => {
			try {
				let foundUser = await this.userWriteOnlyRepository.create(userDto);
	
				let returnObj: IUserDto = {
					id: foundUser.id,
					username: foundUser.username,
					password: '',
					name: foundUser.name,
					email: foundUser.email
				};
				
				resolve(returnObj);
			} catch (error) {
				reject(error);
			}
		});
	}
	
}