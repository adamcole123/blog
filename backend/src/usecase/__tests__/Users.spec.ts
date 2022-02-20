import IUserReadOnlyRepository from '../../application/repositories/IUserReadOnlyRepository';
import IUserWriteOnlyRepository from '../../application/repositories/IUserWriteOnlyRepository';
import FakeUserReadOnlyRepository from '../../infrastructure/FakeUserReadOnlyRepository';
import FakeUserWriteOnlyRepository from '../../infrastructure/FakeUserWriteOnlyRepository';
import IUserDto from '../Users/IUserDto';
import UserSignInUseCase from '../Users/UserSignInUseCase';

let userReadOnlyRepository: IUserReadOnlyRepository = new FakeUserReadOnlyRepository();
let userWriteOnlyRepository: IUserWriteOnlyRepository = new FakeUserWriteOnlyRepository();

describe('User use cases', () => {	
	it('UserSignInUseCase', async () => {
		//Arrange
		let userSignInUseCase = new UserSignInUseCase(userReadOnlyRepository);
		let user: IUserDto = {
			id: '',
			username: 'test1_username',
			password: 'test1password',
			name: '',
			email: ''
		}

		//Act
		let signedInUser: IUserDto = await userSignInUseCase.invoke(user)

		//Assert
		expect(signedInUser.password).toBe('');
	})

	it('UserSignInUseCase Wrong Password', async () => {
		//Arrange
		let userSignInUseCase = new UserSignInUseCase(userReadOnlyRepository);
		let user: IUserDto = {
			id: '',
			username: 'test1_username',
			password: 'test1passwor',
			name: '',
			email: ''
		}

		//Act
		try{
			let signedInUser: IUserDto = await userSignInUseCase.invoke(user)
		} catch(e){
			//Assert
			expect(e).toBe('Password incorrect');
		}
	})

	it('UserSignInUseCase Wrong Username', async () => {
		//Arrange
		let userSignInUseCase = new UserSignInUseCase(userReadOnlyRepository);
		let user: IUserDto = {
			id: '',
			username: 'test1_usernme',
			password: 'test1password',
			name: '',
			email: ''
		}

		//Act
		try{
			let signedInUser: IUserDto = await userSignInUseCase.invoke(user)
		} catch(e){
			//Assert
			expect(e).toBe('Could not find user');
		}
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