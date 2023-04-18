import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString, IsUUID, MaxLength } from "class-validator";

export class UpdateCategoryBodyDTO {

  @ApiProperty()
  @IsNotEmpty()
  @IsUUID(4)
  id: string;
  
  @ApiProperty()
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty()
  @IsString()
  @MaxLength(191)
  @IsOptional()
  description?: string;
}
