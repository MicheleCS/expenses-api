import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator/types/decorator/decorators";

export class UpdateExpenseBodyDTO {
  @ApiProperty()
  @IsString()
  @IsOptional()
  value: number;

  @ApiProperty()
  @IsString()
  @IsOptional()
  periodInit: Date;

  @ApiProperty()
  @IsString()
  @IsOptional()
  periodFinal: Date;

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