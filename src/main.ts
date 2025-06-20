import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 4000);

  process.env.TZ = '-03:00';

  app.useGlobalPipes(new ValidationPipe())
  app.enableCors()
}
bootstrap();
