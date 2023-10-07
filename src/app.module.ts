import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { AuthController } from "./auth/auth.controller";
import { CommitsController } from './commits/commits.controller';
import { GithubService } from './service/github.service';
import { HttpModule } from "@nestjs/axios";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [HttpModule, ConfigModule.forRoot()],
  controllers: [AppController, CommitsController],
  providers: [AppService, GithubService],
})
export class AppModule {}
