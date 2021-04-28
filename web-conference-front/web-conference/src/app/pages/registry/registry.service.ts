import { Inject, Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { RegistryRequest } from "src/app/dtos/requests/registry/registryRequest";
import { UserIdRequest } from "src/app/dtos/user.dto";

@Injectable()
export class RegistryService {

  private httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

  constructor(private http: HttpClient,
              @Inject('BASE_URL') protected baseUrl: string) {
  }

  public register(data: RegistryRequest): Observable<UserIdRequest> {
    const url = this.baseUrl + 'api/user/register';
    return this.http.post<UserIdRequest>(url, data, this.httpOptions);
  }
}