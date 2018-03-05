import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

Injectable()
export class RestApiService {

  url: string = "https://example/api/v1";
  constructor(private http: HttpClient) {

  }

  get(link: string) {
    return this.http.get(this.url + '/' + link).toPromise();
  }

  post(link: string, body: any) {
    return this.http.post(this.url + '/' + link, body).toPromise();
  }

  put(link: string, body: any) {
    return this.http.put(this.url + '/' + link, body).toPromise();
  }

  delete(link: string, body: any) {
    return this.http.delete(this.url + '/' + link, body).toPromise();
  }

}
