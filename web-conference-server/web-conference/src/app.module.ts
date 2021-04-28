import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { UserModule } from './modules/user/user.module';
import { configService } from './modules/config/config.service';
import { AuthModule } from './modules/auth/auth.module';
import { User } from './modules/user/user.entity';
import { Room } from './modules/room/room.entity';
import { RoomModule } from './modules/room/room.module';
import { UserRoomModule } from './modules/userRoom/userRoom.module';
import { UserRoom } from './modules/userRoom/userRoom.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'postgres.cf5dmxohtlni.eu-central-1.rds.amazonaws.com',
      port: 5432,
      username: 'postgres_admin',
      password: 'adminpassword',
      database: 'postgres',
      entities: [User, Room, UserRoom],
      synchronize: true
    }),
    UserModule,
    RoomModule,
    UserRoomModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
