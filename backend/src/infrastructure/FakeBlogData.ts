import Blog from "../domain/Blog"

let blogs: Blog[] = [
	new Blog("test_id", "title yee", "test, blog, article", "Adam Cole", "This is my test blog post", new Date()),
	new Blog("test_id1", "title yee1", "test1, blog1, article1", "Adam Cole1", "This is my test blog post1", new Date())
]

export default blogs;