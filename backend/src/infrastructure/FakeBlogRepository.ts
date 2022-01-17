import { injectable } from 'inversify';
import IBlogReadOnlyRepository from '../application/repositories/IBlogReadOnlyRepository';
import Blog from '../domain/Blog';

@injectable()
export default class BlogRepository implements IBlogReadOnlyRepository{
	public async fetchAll(): Promise<Blog[]> {
		let blogs: Blog[] = await [
			new Blog("test_id", "title yee", "test, blog, article", "Adam Cole", "This is my test blog post", new Date()),
			new Blog("test_id1", "title yee1", "test1, blog1, article1", "Adam Cole1", "This is my test blog post1", new Date())
		]

		return blogs;
	}

	public async fetch(blog: Blog): Promise<Blog> {
		let foundBlog: Blog = await blog

		return foundBlog;
	}
}