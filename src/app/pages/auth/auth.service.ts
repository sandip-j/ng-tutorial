import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserData } from './auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _httpClient: HttpClient) { }

  public login(body: any) {
    return this._httpClient.post<UserData>("/auth/login", body);
  }
}
