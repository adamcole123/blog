import IBlogReadOnlyRepository from '../../application/repositories/IBlogReadOnlyRepository';
import IBlogDto from './IBlogDto';
import IRetrieveAllBlogsUseCase from './IRetrieveAllBlogsUseCase';

export default class RetrieveAllBlogsUseCase implements IRetrieveAllBlogsUseCase{
	private blogsReadOnlyRepository: IBlogReadOnlyRepository;

	
	constructor(_blogsReadOnlyRepository: IBlogReadOnlyRepository) {
		this.blogsReadOnlyRepository = _blogsReadOnlyRepository;
	}

	invoke(blogDto: IBlogDto[]): Promise<IBlogDto[]> {
		return this.blogsReadOnlyRepository.fetchAll()
	}
	
}