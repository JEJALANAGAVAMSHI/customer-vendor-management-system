import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginUser } from '../models/login-user';

@Injectable({
  providedIn: 'root'
})
export class LoginUserService {
  baseUrl:string = 'http://localhost:5000/api/auth/login'
  constructor(private http:HttpClient) { }
  public loginUser = ( body: LoginUser) => {
    return this.http.post<LoginUser>(this.baseUrl, body);
  }
}
