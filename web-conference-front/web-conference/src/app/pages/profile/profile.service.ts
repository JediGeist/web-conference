import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from "rxjs";

import { CreateRoomRequest } from "src/app/dtos/requests/createRoom/createRoomRequest";
import { UserIdDto } from "src/app/dtos/user.dto";
import { UserRoomDto, UserRoomFindRequest } from 'src/app/dtos/userRoom.dto';

@Injectable()
export class ProfileService {

  private httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

  constructor(private http: HttpClient,
              @Inject('BASE_URL') protected baseUrl: string) {
  }

  public createRoom(data: CreateRoomRequest): Observable<UserIdDto> {
    const url = this.baseUrl + 'api/room/createRoom';
    return this.http.post<UserIdDto>(url, data, this.httpOptions);
  }

  public loadUserRooms(data: UserRoomFindRequest): Observable<UserRoomDto[]> {
    console.log(data);
    const url = this.baseUrl + 'api/userRoom/getUserRooms';
    return this.http.post<UserRoomDto[]>(url, data, this.httpOptions);
  }
}
