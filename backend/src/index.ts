import "reflect-metadata";
import * as bodyParser from 'body-parser';
import * as express from "express";
import { InversifyExpressServer } from 'inversify-express-utils';
import IBlogReadOnlyRepository from './application/repositories/IBlogReadOnlyRepository';
import BlogServiceLocator from './configuration/usecases/BlogServiceLocator';
import { TYPES } from './constants/types';

// declare metadata by @controller annotation
import "./entrypoint/controllers/BlogController";
import BlogRepository from './infrastructure/FakeBlogRepository';
import { Container } from 'inversify';

// set up container
const container = new Container();

// set up bindings
container.bind<BlogServiceLocator>(TYPES.BlogServiceLocator).to(BlogServiceLocator);
container.bind<IBlogReadOnlyRepository>(TYPES.IBlogReadOnlyRepository).to(BlogRepository);

// create server
let server = new InversifyExpressServer(container);
server.setConfig((app: express.Application) => {
  // add body parser
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());
});

let app = server.build();
app.listen(3000);

