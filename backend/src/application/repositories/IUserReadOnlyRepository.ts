import IUserDto from "../../usecase/Users/IUserDto"

export default interface IUserReadOnlyRepository {
	fetchAll(): Promise<IUserDto[]>
	fetch(user: IUserDto): Promise<IUserDto>
}