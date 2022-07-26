import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BingService {

  constructor(private http: HttpClient) { }

  getBingImage() {
    const allowCors = "https://api.allorigins.win/get?url=";
    const apiPath = encodeURIComponent("https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR");
    return this.http.get(allowCors + apiPath);
  }
}
