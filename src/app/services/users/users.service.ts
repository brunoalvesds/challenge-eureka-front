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
    this.token = sessionStorage.getItem("TOKEN");
    this.getUsersList();
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

  getUserById() {

  }

  getUserActivity() {

  }
}
