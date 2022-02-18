import Blog from "../../domain/Blog"
import IBlogDto from '../../usecase/Blogs/IBlogDto';

export default interface IBlogReadOnlyRepository {
	fetchAll(): Promise<Blog[]>
	fetch(blog: IBlogDto): Promise<IBlogDto>
}