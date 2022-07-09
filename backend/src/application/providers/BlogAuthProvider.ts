import { Request, Response, NextFunction } from 'express';
import { injectable, inject } from 'inversify';
import { interfaces } from 'inversify-express-utils';

const authService = inject("AuthService");

@injectable()
class CustomAuthProvider implements interfaces.AuthProvider {
	
	@authService private readonly _authService: AuthService;
	
	async getUser(req: Request, res: Response, next: NextFunction): Promise<interfaces.Principal> {
		const token = req.headers["x-auth-token"]
        const user = await this._authService.getUser(token);
        const principal = new Principal(user);
        return principal;
	}
}