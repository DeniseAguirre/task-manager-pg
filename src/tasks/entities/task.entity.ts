import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Task {
  @ApiProperty({ example: 'a7b9c3f4-2e61-4b3d-b8c7-d2e3f84d9c8d' })
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ApiProperty({ example: 'Comprar leche' })
  @Column()
  title!: string;

  @ApiProperty({ example: 'Recordar comprar leche en el super', required: false })
  @Column({ nullable: true, default: '' })
  description!: string;

  @ApiProperty({ example: false })
  @Column({ default: false })
  completed!: boolean;

  @ApiProperty({ example: '2025-04-07T12:34:56.789Z' })
  @CreateDateColumn()
  createdAt!: Date;

  @ApiProperty({ example: '2025-04-07T12:34:56.789Z' })
  @UpdateDateColumn()
  updatedAt!: Date;
}
