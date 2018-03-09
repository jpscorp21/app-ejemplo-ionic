
import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  forms: {title: string, page: any}[] = [];


  constructor(public navCtrl: NavController) {
    this.forms = [
      {title: 'Formulario 1', page: 'Form1Page'},
      {title: "Formulario 2", page: 'Form2Page'},
      {title: "Formulario 3", page: 'Form3Page'},
      {title: "Formulario 4", page: 'Form4Page'}
    ]
    console.log(this.forms);
  }

}
