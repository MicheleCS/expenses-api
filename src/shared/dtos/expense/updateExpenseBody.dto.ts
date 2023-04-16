import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator/types/decorator/decorators";

export class UpdateExpenseBodyDTO {
  @ApiProperty()
  @IsString()
  @IsOptional()
  value: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  periodInit: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  periodFinal: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  local: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  description: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  paymant: string;
}