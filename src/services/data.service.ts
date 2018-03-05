import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

//import { RestApiService } from '../services/rest-api.service';

@Injectable()
export class DataService {

  message = 'Ejemplo';
  messageType = 'danger'; // Mensaje por Defecto

  constructor(public toastCtrl: ToastController){

  }

  // Métodos de Estado
  error(message) {
    this.messageType = 'danger';
    this.message = message;
    this.showMessage();
  }

  success(message) {
    this.messageType = 'success';
    this.message = message;
    this.showMessage();
  }

  warning(message) {
    this.messageType = 'warning';
    this.message = message;
    this.showMessage();
  }

  showMessage() {
    let toast = this.toastCtrl.create({
      message: this.message,
      duration: 3000,
      cssClass: 'toast-' + this.messageType,
      position: 'bottom'
    })
    toast.present();
  }
}
