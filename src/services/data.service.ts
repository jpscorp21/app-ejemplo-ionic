import { Injectable } from '@angular/core';

//import { RestApiService } from '../services/rest-api.service';

@Injectable()
export class DataService {

  message = '';
  messageType = 'danger'; // Mensaje por Defecto

  constructor(){

  }

  // Métodos de Estado
  error(message) {
    this.messageType = 'danger';
    this.message = message;
  }

  success(message) {
    this.messageType = 'success';
    this.message = message;
  }

  warning(message) {
    this.messageType = 'warning';
    this.message = message;
  }
}
