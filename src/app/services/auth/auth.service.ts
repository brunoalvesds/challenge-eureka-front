import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  authentication() {
    const apiUrl = "https://challenge-fielo.herokuapp.com/auth";
    const headers = new HttpHeaders(
      {
        'x-app-id': 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCh7uxHjWd1CyRgPD4XHcIPKiDb',
        'Content-Type':'application/json; charset=utf-8'
      }
    );

    return this.http.post(apiUrl, headers);
  }
}
