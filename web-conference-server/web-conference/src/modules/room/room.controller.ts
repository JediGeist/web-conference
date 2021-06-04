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
                name: { type: 'string' },
                owner_id: { type: 'string' },
                info: { type: 'string' },
                schedule: { type: 'Date' },
                password: { type: 'string' }
            }
        }
    })
    async addRoom( 
        @Body('name') roomName: string,
        @Body('owner_id') roomOwner: string, 
        @Body('info') roomInfo: string,
        @Body('schedule') roomSchedule: Date,
        @Body('password') roomPassword: string
        ) {
        const roomId = uuid();
        await this.roomService.addRoom(roomId, roomName, roomOwner, roomInfo, roomSchedule, roomPassword);
        console.log(roomId, roomName, roomOwner, roomInfo, roomSchedule, roomPassword);
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

    @Post('checkRoomPassword')
    @Header('Content-Type', 'application/json') 
    @ApiBody({
        schema: { 
            properties: {
                room_id: { type: 'string' },
                password: { type: 'string' }
            }
        }
    })
    async checkRoomPassword( 
        @Body('room_id') roomId: string, 
        @Body('password') roomPassword: string
        ): Promise<any | undefined> {
        return await this.roomService.checkRoomPassword(roomId, roomPassword);
    }
}