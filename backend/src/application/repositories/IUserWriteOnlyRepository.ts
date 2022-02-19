import IUserDto from './../../usecase/Users/IUserDto';

export default interface IUserWriteOnlyRepository {
	create(blog: IUserDto): Promise<IUserDto>
}