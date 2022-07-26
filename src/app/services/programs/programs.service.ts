import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProgramsService {
  token: any = "";
  apiUrl: string = "https://challenge-fielo.herokuapp.com";

  constructor(private http: HttpClient) {
    this.token = sessionStorage.getItem("TOKEN");
  }

  getUserProgram(programId: string) {
    const apiPath = `${this.apiUrl}/programs/${programId}`;
    let headers = new HttpHeaders(
      {
        'x-access-token': this.token
      }
    );
    return this.http.get(apiPath, {headers});
  }
}
