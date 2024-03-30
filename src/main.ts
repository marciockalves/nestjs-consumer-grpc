import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  // await app.listen(3000);

  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.GRPC,
    options:{
      url: '0.0.0:5000',
      package: 'users',
      protoPath: join(__dirname, 'config/users.proto')
    },
  });

  await app.listen();
}
bootstrap();
