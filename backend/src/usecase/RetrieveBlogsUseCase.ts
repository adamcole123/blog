import IBlogReadOnlyRepository from "../application/repositories/IBlogReadOnlyRepository";
import IBlogDto from "./IBlogDto";
import IRetrieveBlogsUseCase from "./IRetrieveBlogsUseCase";

export default class RetrieveBlogsUseCase implements IRetrieveBlogsUseCase {
	
	private blogReadOnlyRepository: IBlogReadOnlyRepository;

	constructor(_blogReadOnlyRepository: IBlogReadOnlyRepository) {
		this.blogReadOnlyRepository = _blogReadOnlyRepository;
	}
	
	public async retrieveBlog(blogDto: IBlogDto): Promise<IBlogDto> {
		let blog = await this.blogReadOnlyRepository.fetch(blogDto);
		
		const foundBlog = blog;
		
		return foundBlog;
	}
	
	public async retrieveBlogs(): Promise<IBlogDto[]> {
		let blogs = await this.blogReadOnlyRepository.fetchAll();

		const foundBlogs = blogs;

		return foundBlogs;
	}
}