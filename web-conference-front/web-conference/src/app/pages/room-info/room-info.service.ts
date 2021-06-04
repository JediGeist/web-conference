import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from "rxjs";

import { CreateRoomRequest } from "src/app/dtos/requests/createRoom/createRoomRequest";
import { UserIdDto } from "src/app/dtos/user.dto";
import { RoomIdRequest, RoomDto } from 'src/app/dtos/room.dto';


@Injectable()
export class RoomInfoService {

  private httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

  constructor(private http: HttpClient,
              @Inject('BASE_URL') protected baseUrl: string) {
  }

  public updateRoom(data: CreateRoomRequest): Observable<UserIdDto> {
    const url = this.baseUrl + 'api/room/updateRoom';
    return this.http.post<UserIdDto>(url, data, this.httpOptions);
  }

  public loadRoomInfo(data: RoomIdRequest): Observable<RoomDto> {
    const url = this.baseUrl + 'api/room/getById';
    console.log(data);
    return this.http.post<RoomDto>(url, data, this.httpOptions);
  }
}
