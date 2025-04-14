import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors({
    origin: 'http://localhost:5173', // libera só pro seu front
    credentials: true, // se você estiver usando cookies/autenticação
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
