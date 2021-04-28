import { Inject, Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { LoginRequest } from "src/app/dtos/requests/login/loginRequest";
import { UserIdRequest } from "src/app/dtos/user.dto";
import { UserIdDto } from "src/app/dtos/user.dto";

@Injectable()
export class LoginService {

  private httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

  constructor(private http: HttpClient,
              @Inject('BASE_URL') protected baseUrl: string) {
  }

  public login(data: LoginRequest): Observable<UserIdDto> {
    const url = this.baseUrl + 'api/auth/login';
    return this.http.post<UserIdDto>(url, data, this.httpOptions);
  }
}