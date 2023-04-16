import { ApiProperty } from "@nestjs/swagger";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('categorys')
export class Category {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty()
  @Column({nullable: false})
  name: string;

  @ApiProperty()
  @Column({nullable: false})
  type: string;

  @ApiProperty()
  @Column()
  thirdParty: string

  @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn()
  public updatedAt: Date;

  @DeleteDateColumn()
  public deletedAt: Date;
}
