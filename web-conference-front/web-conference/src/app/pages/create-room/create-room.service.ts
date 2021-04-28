import { Inject, Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";

import { CreateRoomRequest } from "src/app/dtos/requests/createRoom/createRoomRequest";
import { RoomIdDto } from "src/app/dtos/room.dto";

@Injectable()
export class CreateRoomService {

  private httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

  constructor(private http: HttpClient,
              @Inject('BASE_URL') protected baseUrl: string) {
  }

  public createRoom(data: CreateRoomRequest): Observable<RoomIdDto> {
    const url = this.baseUrl + 'api/room/createRoom';
    return this.http.post<RoomIdDto>(url, data, this.httpOptions);
  }
}