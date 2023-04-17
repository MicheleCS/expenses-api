import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsNotEmpty, IsNumber, IsString, Max, MaxLength, Min } from "class-validator";

export class CreateExpenseBodyDTO {
  @ApiProperty()
  @IsNumber()
  @Min(0)
  @IsNotEmpty()
  value: number;

  @ApiProperty()
  @IsDateString()
  @IsNotEmpty()
  periodInit: Date;

  @ApiProperty()
  @IsDateString()
  @IsNotEmpty()
  periodFinal: Date;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  local: string;

  @ApiProperty()
  @IsString()
  @MaxLength(191)
  @IsNotEmpty()
  description: string;
}
