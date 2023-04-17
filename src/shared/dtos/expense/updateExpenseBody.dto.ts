import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNumber, IsOptional, IsString, Max } from "class-validator";
export class UpdateExpenseBodyDTO {
  @ApiProperty()
  @IsNumber()
  @IsOptional()
  value?: number;

  @ApiProperty()
  @IsDate()
  @IsOptional()
  periodInit?: Date;

  @ApiProperty()
  @IsDate()
  @IsOptional()
  periodFinal?: Date;

  @ApiProperty()
  @IsString()
  @IsOptional()
  local?: string;

  @ApiProperty()
  @IsString()
  @Max(191)
  @IsOptional()
  description?: string;
}
