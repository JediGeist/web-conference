import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getConnection } from 'typeorm';

import { UserRoom } from "./userRoom.entity";
import { CommonService } from "../common/common.service";
import { Room } from "../room/room.entity";
import { UserRoomDto } from "../dto/userRoom.dto";

@Injectable()
export class UserRoomService {
    constructor(
        @InjectRepository(UserRoom) private readonly userRoomRepository: Repository<UserRoom>,
        @InjectRepository(Room) private readonly roomRepository: Repository<Room>,
        private readonly commonService: CommonService
    ) {}  

    async addUserRoomRelation(userId: string, roomId: string, userRole: string) {

        const userRoom = this.userRoomRepository.create({
            user_id: userId,
            room_id: roomId,
            user_role: userRole
        });
        await this.userRoomRepository.save(userRoom);

        console.log(userRoom);
    }

    async getUserRooms(userId: string) {
        const userRooms = await this.userRoomRepository.find({user_id: userId});
        console.log(userRooms);

        if (!userRooms) {
            return [];
        }

        let userRoomsReq: UserRoomDto[] = [];

        for (let relation of userRooms) {
            let room = await this.roomRepository.findOne({room_id: relation.room_id});

            let userRoomDto = new UserRoomDto(room.room_id, room.name, relation.user_id, relation.user_role);
            userRoomsReq.push(userRoomDto);
        }

        return userRoomsReq;
    }
}
