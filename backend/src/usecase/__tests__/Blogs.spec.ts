import "reflect-metadata"
import { mock } from "jest-mock-extended";
import IBlogReadOnlyRepository from "../../application/repositories/IBlogReadOnlyRepository";
import IBlogDto from "../Blogs/IBlogDto";
import IRetrieveBlogUseCase from '../Blogs/IRetrieveBlogUseCase';
import RetrieveBlogUseCase from "../Blogs/RetrieveBlogUseCase";
import FakeBlogReadOnlyRepository from '../../infrastructure/FakeBlogReadOnlyRepository';
import ICreateBlogUseCase from '../Blogs/ICreateBlogUseCase';
import CreateBlogUseCase from "../Blogs/CreateBlogUseCase";
import IBlogWriteOnlyRepository from "../../application/repositories/IBlogWriteOnlyRepository";
import FakeBlogWriteOnlyRepository from "../../infrastructure/FakeBlogWriteOnlyRepository";

let blogReadOnlyRepository: IBlogReadOnlyRepository = new FakeBlogReadOnlyRepository();
let blogWriteOnlyRepository: IBlogWriteOnlyRepository = new FakeBlogWriteOnlyRepository();

describe('Blog use cases', () => {	
	it('RetrieveBlogUseCase', async () => {
		// Arrange
		let retrieveBlogUseCase: IRetrieveBlogUseCase;
		let blogDto: IBlogDto;


		retrieveBlogUseCase = new RetrieveBlogUseCase(blogReadOnlyRepository);

		// Act
		blogDto = await retrieveBlogUseCase.invoke({
			id: "test_id",
			title: "",
			tags: "",
			author: "",
			body: "",
		});

		// Assert
		expect(blogDto.id).toBe('test_id');
		expect(blogDto.title).toBe('title yee');
		expect(blogDto.tags).toBe('test, blog, article');
		expect(blogDto.author).toBe('Adam Cole');
		expect(blogDto.body).toBe('This is my test blog post');
	});

	it('RetrieveBlogUseCase Error Scenario', async () => {
		// Arrange
		let retrieveBlogUseCase: IRetrieveBlogUseCase;
		let blogDto: IBlogDto;

		blogReadOnlyRepository = mock<IBlogReadOnlyRepository>()

		mock(blogReadOnlyRepository).fetch.mockRejectedValue('Cannot retrieve blog data');


		retrieveBlogUseCase = new RetrieveBlogUseCase(blogReadOnlyRepository);

		// Act
		try {
			blogDto = await retrieveBlogUseCase.invoke({
				id: "",
				title: "",
				tags: "",
				author: "",
				body: "",
			});
		} catch (e) {
			// Assert
			expect(e).toMatch('Cannot retrieve blog data');
		}
	});

	it('CreateBlogUseCase', async () => {
		// Arrange
		let createBlogUseCase: ICreateBlogUseCase;
		let blogDto: IBlogDto;


		createBlogUseCase = new CreateBlogUseCase(blogWriteOnlyRepository);

		// Act
		blogDto = await createBlogUseCase.invoke({
			id: "test_idx",
			title: "This is a test blog added through tests",
			tags: "test, blog, yes",
			author: "Test User 1",
			body: "This is the body of the test case blog",
		});

		// Assert
		expect(blogDto.id).toBe('test_idx');
		expect(blogDto.title).toBe('This is a test blog added through tests');
		expect(blogDto.tags).toBe('test, blog, yes');
		expect(blogDto.author).toBe('Test User 1');
		expect(blogDto.body).toBe('This is the body of the test case blog');
	});

	it('CreateBlogUseCase Error Scenario', async () => {
		// Arrange
		let createBlogUseCase: ICreateBlogUseCase;
		let blogDto: IBlogDto;

		blogWriteOnlyRepository = mock<IBlogWriteOnlyRepository>();

		mock(blogWriteOnlyRepository).create.mockRejectedValue('Cannot create blog');

		createBlogUseCase = new CreateBlogUseCase(blogWriteOnlyRepository);

		// Act
		try{
			blogDto = await createBlogUseCase.invoke({
				id: "test_idx",
				title: "This is a test blog added through tests",
				tags: "test, blog, yes",
				author: "Test User 1",
				body: "This is the body of the test case blog",
			});
		} catch (e) {
			// Assert
			expect(e).toMatch('Cannot create blog');
		}

	});
});