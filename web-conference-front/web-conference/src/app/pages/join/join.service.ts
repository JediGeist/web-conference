import { Inject, Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { JoinRequest } from "src/app/dtos/requests/join/joinRequest";
import { RoomDto, RoomIdRequest } from "src/app/dtos/room.dto";

@Injectable()
export class JoinService {

  private httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

  constructor(private http: HttpClient,
              @Inject('BASE_URL') protected baseUrl: string) {
  }

  public checkRoom(data: RoomIdRequest): Observable<RoomDto> {
    const url = this.baseUrl + 'api/room/getById';
    return this.http.post<RoomDto>(url, data, this.httpOptions);
  }

}