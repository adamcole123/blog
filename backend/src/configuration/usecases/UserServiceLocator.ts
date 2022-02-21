import { inject, injectable } from 'inversify';
import UserRegisterUseCase from '../../usecase/Users/UserRegisterUseCase';
import { TYPES } from '../../constants/types';
import IUserWriteOnlyRepository from '../../application/repositories/IUserWriteOnlyRepository';
import IUserRegisterUseCase from '../../usecase/Users/IUserRegisterUseCase';
import IUserSignInUseCase from '../../usecase/Users/IUserSignInUseCase';
import UserSignInUseCase from '../../usecase/Users/UserSignInUseCase';
import IUserReadOnlyRepository from '../../application/repositories/IUserReadOnlyRepository';

@injectable()
export default class UserServiceLocator {

	constructor(@inject(TYPES.IUserReadOnlyRepository) private readRepository: IUserReadOnlyRepository, @inject(TYPES.IUserWriteOnlyRepository) private writeRepository: IUserWriteOnlyRepository){}

	public GetUserRegisterUseCase(): IUserRegisterUseCase {
		return new UserRegisterUseCase(this.writeRepository);
	}

	public GetUserSignInUseCase(): IUserSignInUseCase {
		return new UserSignInUseCase(this.readRepository);
	}
}