import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, Unique, UpdateDateColumn } from "typeorm";
import { ApiProperty } from '@nestjs/swagger';
import { UserRole } from "./userRole.entity";
import { Expense } from "./expense.entity";

@Entity('users')
@Unique(['email'])
@Unique(['cpfCnpj'])
export class User {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty()
  @Column({nullable: false})
  name: string;

  @ApiProperty()
  @Column({nullable: false})
  email: string;

  @ApiProperty()
  @Column({nullable: false})
  password: string;

  @ApiProperty({nullable: false})
  @Column()
  cpfCnpj: string;

  @ApiProperty()
  @Column({nullable: false})
  bithDate: Date;

  @ApiProperty()
  @Column({nullable: false})
  phoneNumber: string;

  @ApiProperty()
  @Column()
  gender: string;

  @ApiProperty()
  @Column({nullable: false})
  company: string;

  @ApiProperty()
  @Column({nullable: false})
  office: string;

  @ApiProperty()
  @Column({nullable: false})
  address: string;

  @ApiProperty()
  @Column({nullable: false})
  city: string;

  @ApiProperty()
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