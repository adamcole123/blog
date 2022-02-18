import { inject } from "inversify";
import { controller, httpGet, interfaces, request, response } from "inversify-express-utils";
import IRetrieveBlogUseCase from '../../usecase/Blogs/IRetrieveBlogUseCase';
import BlogServiceLocator from '../../configuration/usecases/BlogServiceLocator';
import * as express from "express";
import { TYPES } from "../../constants/types";
import IBlogDto from '../../usecase/Blogs/IBlogDto';
import IRetrieveMultipleBlogsUseCase from "../../usecase/Blogs/IRetrieveMultipleBlogsUseCase";

@controller('/blog')
export default class BlogController implements interfaces.Controller {
	private readonly retrieveBlogUseCase: IRetrieveBlogUseCase;
	private readonly retrieveMultipleBlogsUseCase: IRetrieveMultipleBlogsUseCase;
	
	constructor(@inject(TYPES.BlogServiceLocator) serviceLocator: BlogServiceLocator){
		this.retrieveBlogUseCase = serviceLocator.GetRetrieveBlogUseCase();
		this.retrieveMultipleBlogsUseCase = serviceLocator.GetRetrieveMultipleBlogsUseCase();
	}
	
	@httpGet('/')
	public async retrieveBlog(@request() req: express.Request, @response() res: express.Response){
		let requestBlog: IBlogDto = {
			id: req.body.id,
			title: req.body.title,
			tags: req.body.tags,
			author: req.body.author,
			body: req.body.body,
			datePublished: req.body.datePublished
		}

		return this.retrieveBlogUseCase.invoke(requestBlog)
			.then((foundBlogDto: IBlogDto) => res.status(200).json(foundBlogDto))
			.catch((err: Error) => res.status(400).json({error: err.message}));
	}

	@httpGet('/')
	public async retrieveBlogs(@request() req: express.Request, @response() res: express.Response){
		let requestBlogs: IBlogDto[] = req.body;

		return this.retrieveMultipleBlogsUseCase.invoke(requestBlogs)
			.then((foundBlogsDto: IBlogDto[]) => res.status(200).json(foundBlogsDto))
			.catch((err: Error) => res.status(400).json({error: err.message}));
	}
}