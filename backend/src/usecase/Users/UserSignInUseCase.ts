import IUserReadOnlyRepository from '../../application/repositories/IUserReadOnlyRepository';
import IUserDto from './IUserDto';
import IUserSignInUseCase from './IUserSignInUseCase';
import bcrypt from 'bcryptjs';

export default class UserSignInUseCase implements IUserSignInUseCase {
	userReadOnlyRepository: IUserReadOnlyRepository;
	private bc = bcrypt;

	/**
	 *
	 */
	constructor(_userReadOnlyRepository: IUserReadOnlyRepository) {
		this.userReadOnlyRepository = _userReadOnlyRepository;
	}

	invoke(userDto: IUserDto): Promise<IUserDto> {
		return new Promise(async (resolve, reject) => {
			try {
				let foundUser = await this.userReadOnlyRepository.fetch(userDto);

				if(!this.bc.compareSync(userDto.password, foundUser.password)){
					reject('Password incorrect');
				}
	
				let returnObj: IUserDto = {
					id: '',
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