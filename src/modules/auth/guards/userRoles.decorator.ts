import { SetMetadata } from '@nestjs/common';
import { userRole } from 'src/shared/constants/userRole';


export const ROLES_KEY = 'userRole';

export const UserRole = (...useRole: userRole[]) => SetMetadata(ROLES_KEY, userRole);
