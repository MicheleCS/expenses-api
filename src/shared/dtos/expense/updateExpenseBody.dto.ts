import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID, MaxLength } from "class-validator";
export class UpdateExpenseBodyDTO {

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @IsUUID(4)
  id: string;
  
  @ApiProperty()
  @IsNumber()
  @IsOptional()
  value?: number;

  @ApiProperty()
  @IsDateString()
  @IsOptional()
  periodInit?: Date;

  @ApiProperty()
  @IsDateString()
  @IsOptional()
  periodFinal?: Date;

  @ApiProperty()
  @IsString()
  @IsOptional()
  local?: string;

  @ApiProperty()
  @IsString()
  @MaxLength(191)
  @IsOptional()
  description?: string;
}
