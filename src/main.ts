import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { envs } from "./config/envs";
import { Logger } from "@nestjs/common";
import { MicroserviceOptions, Transport } from "@nestjs/microservices";

async function bootstrap() {
  const logger = new Logger("AUTH-MS");
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.NATS,
      options: { servers: envs.nats_servers }
    }
  );
  logger.log(`AUTH-MS RUNNING ON PORT ${envs.port}`);
  await app.listen();
}
bootstrap();
