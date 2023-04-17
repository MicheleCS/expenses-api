import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString, Max } from "class-validator";


export class CreateCategoryBodyDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsString()
  @Max(191)
  @IsNotEmpty()
  description: string;
}
