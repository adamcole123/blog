import IUserReadOnlyRepository from '../../application/repositories/IUserReadOnlyRepository';
import IUserWriteOnlyRepository from '../../application/repositories/IUserWriteOnlyRepository';
import FakeUserReadOnlyRepository from '../../infrastructure/FakeUserReadOnlyRepository';
import FakeUserWriteOnlyRepository from '../../infrastructure/FakeUserWriteOnlyRepository';

let userReadOnlyRepository: IUserReadOnlyRepository = new FakeUserReadOnlyRepository();
let userWriteOnlyRepository: IUserWriteOnlyRepository = new FakeUserWriteOnlyRepository();

describe('User use cases', () => {	
	it('UserSignInUseCase', async () => {
		//Arrange
		let userSignInUseCase = new UserSignInUseCase(userReadOnlyRepository);

		//Act

		//Assert
	})

	it('UserRegisterUseCase', async () => {
		//Arrange
		

		//Act

		//Assert
	})

	it('UserEditUseCase', async () => {
		//Arrange
		

		//Act

		//Assert
	})
})