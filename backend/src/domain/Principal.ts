import { interfaces } from "inversify-express-utils";

class Principal implements interfaces.Principal<T = unknown> {
    public details: T;
    public constructor(details: T) {
        this.details = details;
    }
    public isAuthenticated(): Promise<boolean> {
        return Promise.resolve(true);
    }
    public isResourceOwner(resourceId: unknown): Promise<boolean> {
        return Promise.resolve(resourceId === 1111);
    }
    public isInRole(role: string): Promise<boolean> {
        return Promise.resolve(role === "admin");
    }
}