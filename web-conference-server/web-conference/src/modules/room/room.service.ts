import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getConnection } from 'typeorm';

import { Room } from "./room.entity";
import { CommonService } from "../common/common.service";
import { UserRoom } from "../userRoom/userRoom.entity";

@Injectable()
export class RoomService {
    constructor(
        @InjectRepository(Room) private readonly roomRepository: Repository<Room>,
        @InjectRepository(UserRoom) private readonly userRoomRepository: Repository<UserRoom>,
        private readonly commonService: CommonService
    ) {}  

    async addRoom(roomId: string, roomName: string, ownerId: string) {

        const room = this.roomRepository.create({
            room_id: roomId,
            name: roomName,
            owner_id: ownerId
        });
        await this.roomRepository.save(room);

        const relation = this.userRoomRepository.create({
            room_id: roomId,
            user_id: ownerId,
            user_role: "owner"
        });
        await this.userRoomRepository.save(relation);

        console.log(room);
        return room.room_id;
    }

    async getRoomById(roomId: string) {
        console.log(roomId);
        const room = await this.roomRepository.findOne({room_id: roomId});
        console.log(room);
        if (!room) {
            throw new NotFoundException;
        }

        return room;
    }

    async getRoomByName(roomName: string) {
        console.log(roomName);
        const room = await this.roomRepository.findOne({name: roomName});
        console.log(room);
        if (!room) {
            throw new NotFoundException;
        }

        return room;
    }

    async getRoomsByOwnerId(ownerId: string) {
        const room = await this.roomRepository.find({owner_id: ownerId});
        console.log(room);

        if (!room) {
            throw new NotFoundException;
        }

        return room;
    }
}
