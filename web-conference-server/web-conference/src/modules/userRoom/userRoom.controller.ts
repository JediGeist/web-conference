import { Controller, HttpStatus, Post, Get, Body, Res, Header, Head, Param } from '@nestjs/common';

import { UserRoomService } from './userRoom.service';
import { ApiTags, ApiCreatedResponse, ApiBody} from '@nestjs/swagger';
import { UserRoom } from './userRoom.entity';

@ApiTags('userRoom')
@Controller('api/userRoom')
export class UserRoomController {
    constructor(
        private readonly userRoomService: UserRoomService
    ) {}

    @Post('createRelation')
    @ApiCreatedResponse({
        description: 'Create new user-room relation'
    })
    @Header('Content-Type', 'application/json') 
    @ApiBody({
        schema: { 
            properties: {
                user_id: { type: 'string'},
                room_id: { type: 'string'},
                user_role: { type: 'string'}
            }
        }
    })
    async addUserRoomRelation( 
        @Body('user_id') userId: string,
        @Body('room_id') roomId: string,
        @Body('user_role') userRole: string,
        ) {
        await this.userRoomService.addUserRoomRelation(userId, roomId, userRole);
        console.log(userId, roomId, userRole);
    }

    @Post('getUserRooms')
    @ApiCreatedResponse({
        description: 'Get all user rooms with any roles'
    })
    @Header('Content-Type', 'application/json') 
    @ApiBody({
        schema: { 
            properties: {
                user_id: { type: 'string'}
            }
        }
    })
    async getUserRooms( 
        @Body('user_id') userId: string
        ): Promise<any | undefined> {
        const userRoom = await this.userRoomService.getUserRooms(userId);

        return userRoom;
    }
}