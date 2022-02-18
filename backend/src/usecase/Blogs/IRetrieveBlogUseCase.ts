import IBlogDto from "./IBlogDto";

export default interface IRetrieveBlogUseCase {
	invoke(blogDto: IBlogDto): Promise<IBlogDto>
}