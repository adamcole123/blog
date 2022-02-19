export default interface IUserDto {
	id: string,
	username: string,
	password: string,
	name: string,
	email: string,
	jwt?: string
}