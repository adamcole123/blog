import IBlogWriteOnlyRepository from "../application/repositories/IBlogWriteOnlyRepository";
import Blog from "../domain/Blog";
import IBlogDto from "../usecase/Blogs/IBlogDto";
import blogs from './FakeBlogData';

export default class FakeBlogWriteOnlyRepository implements IBlogWriteOnlyRepository {
	create(blog: IBlogDto): Promise<IBlogDto> {
		return new Promise((resolve, reject) => {
			blogs.push(new Blog(
				blog.id,
				blog.title,
				blog.author,
				blog.tags!,
				blog.body!,
				blog.datePublished!
			))
			
			resolve(blog)
		})
	}
}