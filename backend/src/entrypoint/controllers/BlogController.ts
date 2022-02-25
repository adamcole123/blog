import { inject } from "inversify";
import { controller, httpGet, interfaces, request, response } from "inversify-express-utils";
import IRetrieveBlogUseCase from '../../usecase/Blogs/IRetrieveBlogUseCase';
import BlogServiceLocator from '../../configuration/usecases/BlogServiceLocator';
import * as express from "express";
import { TYPES } from "../../constants/types";
import IBlogDto from '../../usecase/Blogs/IBlogDto';
import IRetrieveAllBlogsUseCase from "../../usecase/Blogs/IRetrieveAllBlogsUseCase";

@controller('/blog')
export default class BlogController implements interfaces.Controller {
	private readonly retrieveBlogUseCase: IRetrieveBlogUseCase;
	private readonly retrieveAllBlogsUseCase: IRetrieveAllBlogsUseCase;
	
	constructor(@inject(TYPES.BlogServiceLocator) serviceLocator: BlogServiceLocator){
		this.retrieveBlogUseCase = serviceLocator.GetRetrieveBlogUseCase();
		this.retrieveAllBlogsUseCase = serviceLocator.GetRetrieveMultipleBlogsUseCase();
	}
	
	@httpGet('/getOne/:id')
	public async retrieveBlog(@request() req: express.Request, @response() res: express.Response){
		let requestBlog: IBlogDto = {
			id: req.params['id'],
			title: "",
			author: ""
		}

		return this.retrieveBlogUseCase.invoke(requestBlog)
			.then((foundBlogDto: IBlogDto) => {
				res.status(200).json(foundBlogDto)
			})
			.catch((err: Error) => res.status(400).json({error: err.message}));
	}

	@httpGet('/getAll')
	public async retrieveBlogs(@request() req: express.Request, @response() res: express.Response){
		let requestBlogs: IBlogDto[] = req.body;

		return this.retrieveAllBlogsUseCase.invoke(requestBlogs)
			.then((foundBlogsDto: IBlogDto[]) => res.status(200).json(foundBlogsDto))
			.catch((err: Error) => res.status(400).json({error: err.message}));
	}
}