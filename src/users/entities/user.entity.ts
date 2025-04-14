import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { Exclude } from 'class-transformer';
import { Task } from '../../tasks/entities/task.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty({ example: 'a7b9c3f4-2e61-4b3d-b8c7-d2e3f84d9c8d' })
  id!: string;

  @Column()
  @ApiProperty({ example: 'Denise' })
  name!: string;

  @Column({ unique: true })
  @ApiProperty({ example: 'example@gmail.com' })
  email!: string;

  @Column()
  @Exclude()
  @ApiProperty({ example: 'Rhguyt@6789' })
  password!: string;

  @Column({ default: 'user' })
  @ApiProperty({ example: 'user' })
  role!: string;

  @OneToMany(() => Task, (task) => task.user)
  tasks!: Task[];

  @CreateDateColumn()
  @ApiProperty({ example: '2025-04-07T12:34:56.789Z' })
  createdAt!: Date;

  @UpdateDateColumn()
  @ApiProperty({ example: '2025-04-07T12:34:56.789Z' })
  updatedAt!: Date;
}
