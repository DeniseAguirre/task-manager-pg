import { IsString, IsBoolean, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
  @IsString()
  @ApiProperty({ example: 'Comprar comida', description: 'Título de la tarea' })
  title!: string;

  @IsString()
  @ApiProperty({ example: 'Comprar frutas y verduras', description: 'Descripción de la tarea' })
  description!: string;

  @IsBoolean()
  @IsOptional()
  @ApiProperty({ example: false, required: false })
  completed?: boolean;
}
