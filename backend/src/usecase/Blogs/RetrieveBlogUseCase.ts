import IBlogReadOnlyRepository from "../../application/repositories/IBlogReadOnlyRepository";
import IBlogDto from "./IBlogDto";
import IRetrieveBlogUseCase from "./IRetrieveBlogUseCase";

export default class RetrieveBlogUseCase implements IRetrieveBlogUseCase {
	
	private blogReadOnlyRepository: IBlogReadOnlyRepository;

	constructor(_blogReadOnlyRepository: IBlogReadOnlyRepository) {
		this.blogReadOnlyRepository = _blogReadOnlyRepository;
	}
	
	public async invoke(blogDto: IBlogDto): Promise<IBlogDto> {
		let blog = await this.blogReadOnlyRepository.fetch(blogDto);
		
		const foundBlog = blog;
		
		return foundBlog;
	}
}