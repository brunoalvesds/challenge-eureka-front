import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  token: any = "";
  apiUrl: string = "https://challenge-fielo.herokuapp.com";

  constructor(private http: HttpClient) {
    this.token = localStorage.getItem("TOKEN");
  }

  getUsersList() {
    const apiPath = `${this.apiUrl}/users`;
    let headers = new HttpHeaders(
      {
        'x-access-token': this.token
      }
    );
    return this.http.get(apiPath, {headers});
  }

  getUserById(userId: string) {
    const apiPath = `${this.apiUrl}/users/${userId}`;
    let headers = new HttpHeaders(
      {
        'x-access-token': this.token
      }
    );
    return this.http.get(apiPath, {headers});
  }

  getUserActivity(userId: string) {
    const apiPath = `${this.apiUrl}/users/${userId}/activities`;
    let headers = new HttpHeaders(
      {
        'x-access-token': this.token
      }
    );
    return this.http.get(apiPath, {headers});
  }
}
