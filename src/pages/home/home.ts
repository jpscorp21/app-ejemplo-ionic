import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Form1Page } from '../form1/form1';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  form1Page: any = Form1Page;

  constructor(public navCtrl: NavController) {

  }

}
