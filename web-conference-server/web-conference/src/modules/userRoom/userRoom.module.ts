import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'

import { UserRoomService } from './userRoom.service';
import { UserRoom } from './userRoom.entity';
import { UserRoomController } from './userRoom.controller';
import { CommonService } from '../common/common.service';
import { Room } from '../room/room.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserRoom]), TypeOrmModule.forFeature([Room])],
  controllers: [UserRoomController],
  providers: [UserRoomService, CommonService],
  exports: [UserRoomService]
})
export class UserRoomModule {}
