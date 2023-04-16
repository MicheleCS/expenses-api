import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator/types/decorator/decorators";

export class UpdateUserBodyDTO {
  @ApiProperty()
  @IsString()
  @IsOptional()
  name: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  email: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  password: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  cpfCnpj: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  birthDate: Date;

  @ApiProperty()
  @IsString()
  @IsOptional()
  phoneNumber: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  gender: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  company: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  office: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  adress: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  city: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  state: string;
}
