import IBlogDto from "./IBlogDto";

export default interface ICreateBlogUseCase {
	invoke(blogDto: IBlogDto): Promise<IBlogDto>
}