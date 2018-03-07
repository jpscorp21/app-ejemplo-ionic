import { Injectable } from '@angular/core';
import { RestApiService } from '../rest-api.service';

@Injectable()
export class PaisesService {

  url: string;

  constructor(private api: RestApiService) {
    this.url = "https://restcountries.eu/rest/v2";
  }

  query() {
    return this.api.get(this.url, "all");
  }

}
