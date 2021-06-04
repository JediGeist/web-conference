export class RoomDto {
    room_id: string;
    name: string;
    owner_id: string;
    room_info: string;
    room_schedule: string;
    room_password: string;
  }

export class RoomIdDto {
    room_id: string;
 }

export class RoomIdRequest {
  room_id: string;
}