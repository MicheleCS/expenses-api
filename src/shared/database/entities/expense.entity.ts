import { ApiProperty } from "@nestjs/swagger";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "./user.entity";

@Entity('expenses')
export class Expense {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @ApiProperty()
  @Column({nullable: false})
  value: number;

  @ApiProperty()
  @Column({nullable: false})
  periodInit: Date;

  @ApiProperty()
  @Column({nullable: false})
  periodFinal: Date;

  @ApiProperty()
  @Column({nullable: false})
  local: string;

  @ApiProperty()
  @Column({nullable: false})
  description: string;

  @Column()
  status: string;

  @ApiProperty()
  @Column()
  paymant: string;

  @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn()
  public updatedAt: Date;

  @DeleteDateColumn()
  public deletedAt: Date;

  @ManyToOne(() => User, (user) => user.expense, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'user_id' })
  user?: User;

}
