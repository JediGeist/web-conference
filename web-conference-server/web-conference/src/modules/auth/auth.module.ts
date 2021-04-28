import { Module } from '@nestjs/common';
//import { PassportModule } from '@nestjs/passport';
//import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { UserModule } from '../user/user.module';

import { LocalStrategy } from './services/local.strategy';
import { AuthService } from './services/auth.service';
import { JwtStrategy } from './services/jwt.strategy';

import { AuthController } from './auth.controller';

@Module({
  imports: [
    UserModule,
    //PassportModule,
    ConfigModule
    //JwtModule.registerAsync({
    //  imports: [ConfigModule],
    //  useFactory: (configService: ConfigService) => ({
    //   secret: configService.get<string>('JWT_SECRET'),
    //    signOptions: { expiresIn: configService.get<string>('JWT_EXPIRES_IN') }
    //  }),
    //  inject: [ConfigService]
    //})
  ],
  controllers: [AuthController],
  providers: [AuthService]//, LocalStrategy, JwtStrategy]
})
export class AuthModule {}