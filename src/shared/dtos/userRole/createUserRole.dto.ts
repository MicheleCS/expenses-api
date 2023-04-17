import { Role } from "src/shared/database/entities/role.entity";
import { User } from "src/shared/database/entities/user.entity";
export class CreateUserRoleDTO {
  user: User;
  role: Role;
}