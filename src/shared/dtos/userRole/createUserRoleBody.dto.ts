import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator/types/decorator/decorators";
import { Column } from "typeorm";

export class CreateUserRoleBodyDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  company: string;
}
