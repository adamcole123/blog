import { inject, injectable } from 'inversify';
import RetrieveBlogUseCase from '../../usecase/Blogs/RetrieveBlogUseCase';
import IBlogReadOnlyRepository from '../../application/repositories/IBlogReadOnlyRepository';
import IRetrieveBlogUseCase from '../../usecase/Blogs/IRetrieveBlogUseCase';
import { TYPES } from '../../constants/types';
import RetrieveMultipleBlogsUseCase from '../../usecase/Blogs/RetrieveMultipleBlogsUseCase';

@injectable()
export default class BlogServiceLocator {

	constructor(@inject(TYPES.IBlogReadOnlyRepository) private readRepository: IBlogReadOnlyRepository){}

	public GetRetrieveBlogUseCase(): IRetrieveBlogUseCase {
		return new RetrieveBlogUseCase(this.readRepository);
	}

	public GetRetrieveMultipleBlogsUseCase(): RetrieveMultipleBlogsUseCase {
		return new RetrieveMultipleBlogsUseCase(this.readRepository);
	}
}