import "reflect-metadata";
import "jest";
import {mock} from "jest-mock-extended";
import BlogServiceLocator from '../../src/configuration/usecases/BlogServiceLocator';
import IBlogReadOnlyRepository from '../../src/application/repositories/IBlogReadOnlyRepository';
import Blog from "../../src/domain/Blog";
import BlogController from "../../src/entrypoint/controllers/BlogController";
import * as express from "express";

describe('Blog read test', () => {
	let blogController: BlogController;
	let serviceLocator: BlogServiceLocator;
	let fakeRepository = mock<IBlogReadOnlyRepository>();
	
	fakeRepository.fetchAll.mockReturnValue(new Promise(
		(resolve) => resolve(
				[
					new Blog("test_id", "title yee", "test, blog, article", "Adam Cole", "This is my test blog post", new Date()),
					new Blog("test_id1", "title yee1", "test1, blog1, article1", "Adam Cole1", "This is my test blog post1", new Date())
				]
			)
		)
	)

	let req = express.request;
	let res = express.response;
	
	beforeEach(()=>{
		serviceLocator = new BlogServiceLocator(fakeRepository);
		blogController = new BlogController(serviceLocator);
	})

	it('fetch method returns blog items', async () => {
		let response: express.Response = await blogController.retrieveBlogs(req, res);

		expect(res.status).toBeCalledWith(200);
	})
})