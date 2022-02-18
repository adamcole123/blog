import IBlogDto from './IBlogDto';

export default interface IRetrieveMultipleBlogsUseCase {
	invoke(blogDto: IBlogDto[]): Promise<IBlogDto[]>;
}