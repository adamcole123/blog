import IBlogDto from "../../usecase/Blogs/IBlogDto";

export default interface IBlogReadOnlyRepository {
	create(blog: IBlogDto): Promise<IBlogDto>
}