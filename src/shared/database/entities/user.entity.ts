import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, Unique, UpdateDateColumn } from "typeorm";
import { ApiProperty } from '@nestjs/swagger';
import { UserRole } from "./userRole.entity";
import { Expense } from "./expense.entity";
import { Exclude } from "class-transformer";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";

@Entity('users')
@Unique(['email'])
@Unique(['cpfCnpj'])
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Column({nullable: false})
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Column({nullable: false})
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Exclude()
  @Column({nullable: false})
  password: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Column('uuid')
  role_id: string;

  @ApiProperty({nullable: false})
  @IsNotEmpty()
  @IsString()
  @Column()
  cpfCnpj: string;

  @ApiProperty()
  @IsNotEmpty()
  @Column({nullable: false})
  bithDate: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Column({nullable: false})
  phoneNumber: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  @Column()
  gender?: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Column({nullable: false})
  company: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Column({nullable: false})
  office: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Column({nullable: false})
  address: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Column({nullable: false})
  city: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Column({nullable: false})
  state: string;

  @Column()
  status: string;

  @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn()
  public updatedAt: Date;

  @DeleteDateColumn()
  public deletedAt: Date;

  @OneToMany(() => UserRole, (userRole) => userRole.user)
  public userRole?: UserRole[];

  @OneToMany(() => Expense, (expense) => expense.user)
  public expense?: Expense[];

}