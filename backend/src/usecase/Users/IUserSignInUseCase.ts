import IUserDto from './IUserDto';
import IUserReadOnlyRepository from '../../application/repositories/IUserReadOnlyRepository';
export default interface IUserSignInUseCase {
	userReadOnlyRepository: IUserReadOnlyRepository;

	invoke(userDto: IUserDto): Promise<IUserDto>;
}