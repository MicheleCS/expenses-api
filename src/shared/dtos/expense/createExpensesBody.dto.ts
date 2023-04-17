import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateExpenseBodyDTO {
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  value: number;

  @ApiProperty()
  @IsDate()
  @IsNotEmpty()
  periodInit: Date;

  @ApiProperty()
  @IsDate()
  @IsNotEmpty()
  periodFinal: Date;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  local: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  description: string;
}
