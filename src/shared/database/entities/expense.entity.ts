import { ApiProperty } from "@nestjs/swagger";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "./user.entity";
import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";

@Entity('expenses')
export class Expense {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @ApiProperty()
  @IsNotEmpty()
  @Column({nullable: false})
  value: number;

  @ApiProperty()
  @IsNotEmpty()
  @Column({nullable: false})
  periodInit: Date;

  @ApiProperty()
  @IsNotEmpty()
  @Column({nullable: false})
  periodFinal: Date;

  @ApiProperty()
  @IsNotEmpty()
  @Column({nullable: false})
  local: string;

  @ApiProperty()
  @IsNotEmpty()
  @Column({nullable: false})
  description: string;

  @Column()
  status: string;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  public updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  public deletedAt: Date;

  @ManyToOne(() => User, (user) => user.expense, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'user_id' })
  user?: User;

}
