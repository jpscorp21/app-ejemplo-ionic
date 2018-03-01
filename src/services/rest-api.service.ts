import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

Injectable()
export class RestApiService {
  constructor(private http: HttpClient) {

  }

  get(link: string) {
    return this.http.get(link).toPromise();
  }

  post(link: string, body: any) {
    return this.http.post(link, body).toPromise();
  }

}
