import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";
export class CreateUserRoleBodyDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;
}
