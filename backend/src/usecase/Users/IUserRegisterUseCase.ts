import IUserDto from './IUserDto';
import IUserWriteOnlyRepository from './../../application/repositories/IUserWriteOnlyRepository';
export default interface IUserRegisterUseCase {
	userWriteOnlyRepository: IUserWriteOnlyRepository;

	invoke(userDto: IUserDto): Promise<IUserDto>;
}