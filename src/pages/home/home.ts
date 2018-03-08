import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Form1Page } from '../form1/form1';
import { Form2Page } from '../form2/form2';
import { Form3Page } from '../form3/form3';
import { Form4Page } from '../form4/form4';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  form1Page: any = Form1Page;
  form2Page: any = Form2Page;
  form3Page: any = Form3Page;
  form4Page: any = Form4Page;

  forms: {title: string, page: any}[] = [];


  constructor(public navCtrl: NavController) {
    this.forms = [
      {title: 'Formulario 1', page: this.form1Page},
      {title: "Formulario 2", page: this.form2Page},
      {title: "Formulario 3", page: this.form3Page},
      {title: "Formulario 4", page: this.form4Page}
    ]
    console.log(this.forms);
  }

}
