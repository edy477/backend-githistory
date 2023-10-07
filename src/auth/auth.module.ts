import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { GithubStrategy } from './github.strategy';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'github' }),
    ConfigModule.forRoot(),
  ],
  providers: [GithubStrategy],
  exports: [PassportModule],
})
export class AuthModule {}