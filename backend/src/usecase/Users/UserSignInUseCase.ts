import IUserReadOnlyRepository from '../../application/repositories/IUserReadOnlyRepository';
import IUserDto from './IUserDto';
import IUserSignInUseCase from './IUserSignInUseCase';
export default class UserSignInUseCase implements IUserSignInUseCase {
	userReadOnlyRepository: IUserReadOnlyRepository;

	/**
	 *
	 */
	constructor(_userReadOnlyRepository: IUserReadOnlyRepository) {
		this.userReadOnlyRepository = _userReadOnlyRepository;
	}

	invoke(userDto: IUserDto): Promise<IUserDto> {
		return new Promise(async (resolve, reject) => {
			try{
				let foundUser = await this.userReadOnlyRepository.fetch(userDto);
	
				let returnObj: IUserDto = {
					id: foundUser.id,
					username: foundUser.username,
					password: '',
					name: foundUser.name,
					email: foundUser.email,
					jwt: 
				}
				
			} catch(e){
	
			}
		});
	}
	
}