import IBlogDto from "../../usecase/Blogs/IBlogDto";

export default interface IBlogWriteOnlyRepository {
	create(blog: IBlogDto): Promise<IBlogDto>
}