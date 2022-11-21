/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';
import { AppModule } from './app/app.module';
import {ValidationPipe} from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  app.useGlobalPipes(new ValidationPipe());
  app.use(cookieParser());
  app.enableCors({
      origin: ['http://localhost:4200', 'http://localhost:4300', 'http://localhost:5000'],
      credentials: true
  })
  const port = process.env.PORT || 3333;
  await app.listen(port);
  Logger.log(
    `🚀  Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
