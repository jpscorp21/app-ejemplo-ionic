import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class RestApiService {

  constructor(public http: HttpClient) {

  }

  getHeaders() {
    const token = localStorage.getItem('token'); //Recibe el token del storage
    return token ? new HttpHeaders().set('Authorization', token) : null; //Si existe el token se carga en la cabecera http y si no se queda null
  }

  get(url: string, link: string) {
    return this.http.get(url + '/' + link, {headers: this.getHeaders()}).toPromise();
  }

  post(url: string, link: string, body: any) {
    return this.http.post(url + '/' + link, body, {headers: this.getHeaders()}).toPromise();
  }

  put(url: string, link: string, body: any) {
    return this.http.put(url + '/' + link, body, {headers: this.getHeaders()}).toPromise();
  }

  delete(url: string, link: string, body: any) {
    return this.http.delete(url + '/' + link, body).toPromise();
  }

}
