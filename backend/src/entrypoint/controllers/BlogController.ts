import { inject } from "inversify";
import { controller, httpGet, interfaces, request, response } from "inversify-express-utils";
import IRetrieveBlogsUseCase from '../../usecase/IRetrieveBlogsUseCase';
import BlogServiceLocator from '../../configuration/usecases/BlogServiceLocator';
import * as express from "express";
import { TYPES } from "../../constants/types";
import IBlogDto from "../../usecase/IBlogDto";

@controller('/blog')
export default class BlogController implements interfaces.Controller {
	private readonly retrieveBlogsUseCase: IRetrieveBlogsUseCase;
	
	constructor(@inject(TYPES.BlogServiceLocator) serviceLocator: BlogServiceLocator){
		this.retrieveBlogsUseCase = serviceLocator.GetRetrieveBlogsUseCase();
	}
	
	@httpGet('/')
	public async retrieveBlogs(@request() req: express.Request, @response() res: express.Response){
		return this.retrieveBlogsUseCase.retrieveBlogs()
			.then((foundBlogDto: IBlogDto[]) => res.status(200).json(foundBlogDto))
			.catch((err: Error) => res.status(400).json({error: err.message}));
	}
}