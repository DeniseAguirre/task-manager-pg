import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { join } from 'path';
import * as fs from 'fs';

async function bootstrap() {
  const dataPath = join(__dirname, '..', 'data');
  if (!fs.existsSync(dataPath)) {
    console.log(`Creando directorio para la base de datos: ${dataPath}`);
    fs.mkdirSync(dataPath, { recursive: true });
  }

  const app = await NestFactory.create(AppModule);

  app.enableCors();

  app.useGlobalPipes(new ValidationPipe());

  const port = process.env.PORT ?? 3001;

  await app.listen(port);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
