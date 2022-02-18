import IBlogReadOnlyRepository from '../../application/repositories/IBlogReadOnlyRepository';
import IBlogDto from './IBlogDto';
import IRetrieveMultipleBlogsUseCase from './IRetrieveMultipleBlogsUseCase';

export default class RetrieveBlogsUseCase implements IRetrieveMultipleBlogsUseCase{
	blogsReadOnlyRepository: IBlogReadOnlyRepository;

	
	constructor(_blogsReadOnlyRepository: IBlogReadOnlyRepository) {
		this.blogsReadOnlyRepository = _blogsReadOnlyRepository;
	}

	invoke(blogDto: IBlogDto[]): Promise<IBlogDto[]> {
		throw new Error('Method not implemented.');
	}
	
}