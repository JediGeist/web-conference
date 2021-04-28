export class UserRoomDto {
    room_id: string;
    room_name: string;
    user_id: string;
    user_role: string;

    constructor(roomId: string, roomName: string, userId: string, userRole: string) {
        this.room_id = roomId;
        this.room_name = roomName;
        this.user_id = userId;
        this.user_role = userRole;
    }
}