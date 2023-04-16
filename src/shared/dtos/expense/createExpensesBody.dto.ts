import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString } from "class-validator/types/decorator/decorators";

export class CreateExpenseBodyDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  value: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  periodInit: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  periodFinal: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  local: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  paymant: string;
}
