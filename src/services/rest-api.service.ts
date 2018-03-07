import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class RestApiService {

  url: string = "https://restcountries.eu/rest/v2";
  constructor(public http: HttpClient) {

  }

  getHeaders() {
    const token = localStorage.getItem('token'); //Recibe el token del storage
    return token ? new HttpHeaders().set('Authorization', token) : null; //Si existe el token se carga en la cabecera http y si no se queda null
  }

  get(link: string) {
    return this.http.get(this.url + '/' + link, {headers: this.getHeaders()}).toPromise();
  }

  post(link: string, body: any) {
    return this.http.post(this.url + '/' + link, body, {headers: this.getHeaders()}).toPromise();
  }

  put(link: string, body: any) {
    return this.http.put(this.url + '/' + link, body, {headers: this.getHeaders()}).toPromise();
  }

  delete(link: string, body: any) {
    return this.http.delete(this.url + '/' + link, body).toPromise();
  }

}
