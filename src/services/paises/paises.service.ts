import { Injectable } from '@angular/core';
import { RestApiService } from '../rest-api.service';

@Injectable()
export class PaisesService {

  constructor(private api: RestApiService) {
    this.api.url = "https://restcountries.eu/rest/v2";
  }

  query() {
    return this.api.get("all");
  }

}
