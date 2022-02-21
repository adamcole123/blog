import IBlogDto from './IBlogDto';

export default interface IRetrieveAllBlogsUseCase {
	invoke(blogDto: IBlogDto[]): Promise<IBlogDto[]>;
}