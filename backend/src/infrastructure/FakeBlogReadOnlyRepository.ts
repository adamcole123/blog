import { injectable } from 'inversify';
import IBlogReadOnlyRepository from '../application/repositories/IBlogReadOnlyRepository';
import Blog from '../domain/Blog';
import blogs from './FakeBlogData';
import IBlogDto from '../usecase/Blogs/IBlogDto';

@injectable()
export default class FakeBlogReadOnlyRepository implements IBlogReadOnlyRepository{
	public async fetchAll(): Promise<Blog[]> {
		return blogs;
	}

	public async fetch(blog: IBlogDto): Promise<IBlogDto> {
		return new Promise((resolve, reject) => {
			let foundBlog = blogs.find(blogItem => (blogItem.id === blog.id));
	
			if(foundBlog)
				resolve(foundBlog);

			reject('Could not find blog');
		})
	}
}