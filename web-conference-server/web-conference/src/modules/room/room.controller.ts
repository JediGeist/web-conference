import { Controller, Post, Body,Header } from '@nestjs/common';

import { uuid } from 'uuidv4';

import { RoomService } from './room.service';
import { ApiTags, ApiCreatedResponse, ApiBody} from '@nestjs/swagger';
import { Room } from './room.entity';

@ApiTags('room')
@Controller('api/room')
export class RoomController {
    constructor(
        private readonly roomService: RoomService
    ) {}

    @Post('createRoom')
    @ApiCreatedResponse({
        description: 'Create new room'
    })
    @Header('Content-Type', 'application/json') 
    @ApiBody({
        schema: { 
            properties: {
                name: { type: 'string'},
                owner_id: { type: 'string'}
            }
        }
    })
    async addRoom( 
        @Body('name') roomName: string,
        @Body('owner_id') roomOwner: string
        ) {
        const roomId = uuid();
        await this.roomService.addRoom(roomId, roomName, roomOwner);
        console.log(roomId, roomName, roomOwner);
        return {room_id: roomId};
    }

    @Post('getById')
    @Header('Content-Type', 'application/json') 
    @ApiBody({
        schema: { 
            properties: {
                room_id: { type: 'string'}
            }
        }
    })
    async getRoomById( 
        @Body('room_id') roomId: string
        ): Promise<Room | undefined> {
        const room = await this.roomService.getRoomById(roomId);
        return room;
    }

    @Post('getRoomByName')
    @Header('Content-Type', 'application/json') 
    @ApiBody({
        schema: { 
            properties: {
                name: { type: 'string'}
            }
        }
    })
    async getRoomByName( 
        @Body('name') roomName: string
        ): Promise<Room | undefined> {
        const room = await this.roomService.getRoomByName(roomName);

        return room;
    }

    @Post('getRoomsByOwnerId')
    @Header('Content-Type', 'application/json') 
    @ApiBody({
        schema: { 
            properties: {
                owner_id: { type: 'string'}
            }
        }
    })
    async getRoomsByOwnerId( 
        @Body('owner_id') roomOwner: string
        ): Promise<Room[] | undefined> {
        const room = await this.roomService.getRoomsByOwnerId(roomOwner);

        return room;
    }
}