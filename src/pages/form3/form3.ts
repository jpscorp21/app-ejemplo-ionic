import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'page-form3',
  templateUrl: 'form3.html',
})
export class Form3Page {

  nombre = '';
  apellido = '';
  edad = 10;
  ciudad = '';
  barrio = '';

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private data: DataService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Form3Page');
  }

  formulario() {
    console.log(this.nombre);
    console.log(this.apellido);
    console.log(this.edad);
    console.log(this.ciudad);
    console.log(this.barrio);
    this.data.showMessage();
  }
}
