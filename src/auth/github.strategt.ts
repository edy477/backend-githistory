// github.strategy.ts

import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-github';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class GithubStrategy extends PassportStrategy(Strategy, 'github') {
  constructor(private readonly configService: ConfigService) {
    super({
      clientID: configService.get('a57b6a5000402c543d3f'),
      clientSecret: configService.get('aae1493e796357902a694882ee516f3e2155673f'),
      callbackURL: 'http://localhost:3000/auth/github/callback',
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
  ): Promise<any> {

    return { profile, accessToken };
  }
}
