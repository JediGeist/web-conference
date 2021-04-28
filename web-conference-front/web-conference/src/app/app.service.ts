import { Inject, Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";

import { UserIdRequest } from "src/app/dtos/user.dto";
import { UserDto } from "./dtos/user.dto";
import { NavigationTypeEnum } from "./interfaces/header/INavigationItem";


@Injectable()
export class AppService {

  private httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

  public user: UserDto = null;
  public selectedNavItem: NavigationTypeEnum = null;

  constructor(private http: HttpClient,
              @Inject('BASE_URL') protected baseUrl: string) {
  }

  public getUserById(data: UserIdRequest): Observable<UserDto> {
    console.log(data);
    const url = this.baseUrl + 'api/user/getById';
    return this.http.post<UserDto>(url, data, this.httpOptions);
  }
}