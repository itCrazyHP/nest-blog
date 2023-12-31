import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import {JwtModule} from '@nestjs/jwt'
import {ConfigModule,ConfigService} from '@nestjs/config'
import { JwtStrategy } from './strategy/jwt.strategy';

@Module({
  imports:[JwtModule.registerAsync({
    imports:[ConfigModule],
    inject:[ConfigService],
    useFactory:(config:ConfigService)=>{
      return {
        secret:config.get('TOKEN_SECRET'),
        signOptions:{expiresIn:'100d'}
      }
    }
  })],
  controllers: [AuthController],
  providers: [AuthService,JwtStrategy]
})
export class AuthModule {}
