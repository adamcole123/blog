import IBlogWriteOnlyRepository from '../../application/repositories/IBlogWriteOnlyRepository';
import IBlogDto from './IBlogDto';
import ICreateBlogUseCase from './ICreateBlogUseCase';

export default class CreateBlogUseCase implements ICreateBlogUseCase{
	private blogWriteOnlyRepository: IBlogWriteOnlyRepository

	constructor(_blogWriteOnlyRepository: IBlogWriteOnlyRepository){
		this.blogWriteOnlyRepository = _blogWriteOnlyRepository;
	}

	invoke(blogDto: IBlogDto): Promise<IBlogDto> {
		return new Promise(async (resolve, reject) => {
			try{
				resolve(await this.blogWriteOnlyRepository.create(blogDto));
			} catch(e){
				reject('Cannot create blog');
			}
		});
	}
	
}