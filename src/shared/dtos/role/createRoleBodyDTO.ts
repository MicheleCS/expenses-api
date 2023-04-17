import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateRoleBodyDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;
}
