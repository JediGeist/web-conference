import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'

import { UserService } from './user.service';
import { User } from './user.entity';
import { UserController } from './user.controller';
import { CommonService } from '../common/common.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService, CommonService],
  exports: [UserService]
})
export class UserModule {}
