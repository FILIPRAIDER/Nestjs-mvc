import { NestFactory } from '@nestjs/core';

import { join } from 'path';
import * as express from 'express';
import { AppModule } from './modules/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Servir archivos estáticos desde "public"
  app.use('/public', express.static(join(__dirname, '..', 'public')));

  await app.listen(3000);
  console.log(`🚀 Servidor corriendo en http://localhost:3000`);
}
bootstrap();
