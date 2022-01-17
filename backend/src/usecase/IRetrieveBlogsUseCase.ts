import IBlogDto from "@blog_backend/usecase/IBlogDto";

export default interface IRetrieveBlogsUseCase {
	retrieveBlogs(): Promise<IBlogDto[]>
	retrieveBlog(blogDto: IBlogDto): Promise<IBlogDto>
}