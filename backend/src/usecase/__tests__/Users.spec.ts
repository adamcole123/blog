import IUserReadOnlyRepository from '../../application/repositories/IUserReadOnlyRepository';
import IUserWriteOnlyRepository from '../../application/repositories/IUserWriteOnlyRepository';
import User from '../../domain/User';
import users from '../../infrastructure/FakeUserData';
import FakeUserReadOnlyRepository from '../../infrastructure/FakeUserReadOnlyRepository';
import FakeUserWriteOnlyRepository from '../../infrastructure/FakeUserWriteOnlyRepository';
import IUserDto from '../Users/IUserDto';
import UserRegisterUseCase from '../Users/UserRegisterUseCase';
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
		let userRegisterUseCase = new UserRegisterUseCase(userWriteOnlyRepository);
		let user: IUserDto = {
			id: '',
			username: 'testcase_username',
			password: 'testcasepassword',
			name: 'testcase_name',
			email: 'testcase@email.com'
		}

		//Act
		let newUser: IUserDto = await userRegisterUseCase.invoke(user)

		let comparisonData: IUserDto = {
			id: '',
			username: 'testcase_username',
			password: '',
			name: 'testcase_name',
			email: 'testcase@email.com'
		}

		//Assert
		let lastUser: User = users[users.length - 1];
		expect(newUser).toStrictEqual(comparisonData);
	})

	it('UserRegisterUseCase existing username scenario', async () => {
		//Arrange
		let userRegisterUseCase = new UserRegisterUseCase(userWriteOnlyRepository);
		let user: IUserDto = {
			id: '',
			username: 'test1_username',
			password: 'testcasepassword',
			name: 'testcase_name',
			email: 'testcase@email.com'
		}

		//Act
		try {
			let newUser: IUserDto = await userRegisterUseCase.invoke(user)
		} catch (error) {
			//Assert
			expect(error).toBe('Existing user already has that username');
		}
	})

	it('UserEditUseCase', async () => {
		//Arrange
		

		//Act

		//Assert
	})
})