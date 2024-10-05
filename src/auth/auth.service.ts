import { Injectable, Logger, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class AuthService extends PrismaClient implements OnModuleInit {
  logger = new Logger("Service Auth")
  onModuleInit() {
    this.$connect()
    this.logger.log("DB CONNECTED")
  }
}
