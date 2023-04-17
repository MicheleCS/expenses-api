import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator/types/decorator/decorators";

export class UpdateCategoryBodyDTO {
  @ApiProperty()
  @IsString()
  @IsOptional()
  name: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  type: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  companyParty: string;
}