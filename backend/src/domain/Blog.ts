export default class Blog {
	constructor(
		public id: string, 
		public title: string, 
		public tags: string, 
		public author: string, 
		public body: string,
		public datePublished: Date){

	}
}