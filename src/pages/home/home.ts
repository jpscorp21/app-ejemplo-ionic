import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Form1Page } from '../form1/form1';
import { Form2Page } from '../form2/form2';
import { Form3Page } from '../form3/form3';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  form1Page: any = Form1Page;
  form2Page: any = Form2Page;
  form3Page: any = Form3Page;

  constructor(public navCtrl: NavController) {

  }

}
