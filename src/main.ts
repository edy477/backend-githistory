import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CustomConfigModule } from './config/config.module';

import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
 /* app.enableCors({
    origin: 'http://localhost:5173', // Replace with the origin of your React app
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // If you need to pass cookies along with the request
  });*/
  app.use(cors()); // Apply the 'cors' middleware

  await app.listen(3000);
}
bootstrap();
