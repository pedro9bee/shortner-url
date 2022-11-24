import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategyService } from './jwt-strategy/jwt-strategy.service';

@Module({
  imports: [
    HttpModule,
    ConfigModule.forRoot(),
    JwtModule.register({
      secret: 'abcd123456',
      signOptions: {
        expiresIn: '60s',
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategyService],
})
export class AuthModule {}