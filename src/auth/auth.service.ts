import { Injectable, Logger, OnModuleInit } from "@nestjs/common";
import { RpcException } from "@nestjs/microservices";
import { PrismaClient } from "@prisma/client";
import { RegisterDto } from "./dto";

@Injectable()
export class AuthService extends PrismaClient implements OnModuleInit {
  logger = new Logger("AUTH-SERVICE")

  onModuleInit() {
    this.$connect()
    this.logger.log("MONGO DB CONNECTED")
  }

  async register(registerDto: RegisterDto) {
    try {
      return await this.user.create({
        data: { ...registerDto }
      })
    } catch (error) {
      throw new RpcException({
        status: 400,
        message: error
      })
    }
  }
}
