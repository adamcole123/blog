import User from "../domain/User";
import bcrypt from 'bcryptjs';

let users: User[] = [
	new User("test1_id", "test1_username", bcrypt.hashSync('test1password', bcrypt.genSaltSync(10)), "test1name", "test1email@test.com"),
	new User("test2_id", "test2_username", bcrypt.hashSync('test2password', bcrypt.genSaltSync(10)), "test2name", "test2email@test.com"),
]

export default users;