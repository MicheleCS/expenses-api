import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { roles } from "src/shared/constants/roles";
import { UserRole } from "src/shared/database/entities/userRole.entity";
import { ROLES_KEY } from "./userRoles.decorator";

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<roles[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!requiredRoles) {
      return true;
    }

    const { user } = context.switchToHttp().getRequest();
    const roles = [];
    user.userRole.forEach((UserRole: UserRole) => {
      roles.push(UserRole.role.name);
    });

    return requiredRoles.some((role) => roles.includes(role));
  }
}
