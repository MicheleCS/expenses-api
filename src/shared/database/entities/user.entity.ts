import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, Unique, UpdateDateColumn } from "typeorm";
import { ApiProperty } from '@nestjs/swagger';
import { UserRole } from "./userRole.entity";
import { Expense } from "./expense.entity";
import { Exclude } from "class-transformer";
import { IsDate, IsNotEmpty, IsOptional, IsString } from "class-validator";

@Entity('users')
@Unique(['email'])
@Unique(['cpfCnpj'])
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty()
  @IsNotEmpty()
  @Column({nullable: false})
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @Column({nullable: false})
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @Exclude()
  @Column({nullable: false})
  password: string;

  @ApiProperty()
  @IsNotEmpty()
  @Column('uuid')
  role_id: string;

  @ApiProperty({nullable: false})
  @IsNotEmpty()
  @Column()
  cpfCnpj: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
  @Column({nullable: false})
  bithDate: Date;

  @ApiProperty()
  @IsNotEmpty()
  @Column({nullable: false})
  phoneNumber: string;

  @ApiProperty()
  @IsOptional()
  @Column()
  gender?: string;

  @ApiProperty()
  @IsNotEmpty()
  @Column({nullable: false})
  company: string;

  @ApiProperty()
  @IsNotEmpty()
  @Column({nullable: false})
  office: string;

  @ApiProperty()
  @IsNotEmpty()
  @Column({nullable: false})
  address: string;

  @ApiProperty()
  @IsNotEmpty()
  @Column('uuid')
  userRoleId: string;

  @Column({ default: 'pending' })
  status: string;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  public deletedAt: Date;

  @OneToMany(() => UserRole, (userRole) => userRole.user)
  public userRole?: UserRole[];

  @OneToMany(() => Expense, (expense) => expense.user)
  public expense?: Expense[];
}
