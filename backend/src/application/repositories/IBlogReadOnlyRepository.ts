import Blog from "../../domain/Blog"

export default interface IBlogReadOnlyRepository {
	fetchAll(): Promise<Blog[]>
	fetch(blog: Blog): Promise<Blog>
}