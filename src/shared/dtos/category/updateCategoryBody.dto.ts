import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString, Max } from "class-validator";

export class UpdateCategoryBodyDTO {
  @ApiProperty()
  @IsString()
  @IsOptional()
  name: string;

  @ApiProperty()
  @IsString()
  @Max(191)
  @IsOptional()
  description: string;
}
