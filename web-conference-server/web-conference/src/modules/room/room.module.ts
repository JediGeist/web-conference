import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'

import { RoomService } from './room.service';
import { Room } from './room.entity';
import { RoomController } from './room.controller';
import { CommonService } from '../common/common.service';
import { UserRoom } from '../userRoom/userRoom.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Room]), TypeOrmModule.forFeature([UserRoom])],
  controllers: [RoomController],
  providers: [RoomService, CommonService],
  exports: [RoomService]
})
export class RoomModule {}
