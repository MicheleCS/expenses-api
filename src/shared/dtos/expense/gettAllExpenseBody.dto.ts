import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNumber, IsOptional, IsString } from "class-validator";

export class GetAllExpenseBodyDTO {
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
  @IsOptional()
  description?: string;
}
