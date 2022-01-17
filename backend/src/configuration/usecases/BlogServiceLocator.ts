import { inject, injectable } from 'inversify';
import RetrieveBlogsUseCase from '../../usecase/RetrieveBlogsUseCase';
import IBlogReadOnlyRepository from '../../application/repositories/IBlogReadOnlyRepository';
import IRetrieveBlogsUseCase from '../../usecase/IRetrieveBlogsUseCase';
import { TYPES } from '../../constants/types';

@injectable()
export default class BlogServiceLocator {

	constructor(@inject(TYPES.IBlogReadOnlyRepository) private readRepository: IBlogReadOnlyRepository){}

	public GetRetrieveBlogsUseCase(): IRetrieveBlogsUseCase {
		return new RetrieveBlogsUseCase(this.readRepository);
	}
}