export class UserRoomDto {
    room_id: string;
    room_name: string;
    user_id: string;
    user_role: string;
    room_schedule: Date;
    room_info: string;
}

export class UserRoomFindRequest {
    user_id: string;
}