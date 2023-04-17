import { ApiProperty } from "@nestjs/swagger";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "./user.entity";
import { IsNotEmpty } from "class-validator";
import { Role } from "./role.entity";

@Entity('user_roles')
export class UserRole {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;

  @ManyToOne(() => Role, (role) => role.userRole, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'role_id' })
  public role: Role;

  @ManyToOne(() => User, (user) => user.userRole, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'user_id' })
  public user?: User;
}
