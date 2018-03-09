import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Form1Page } from './form1';
import { Form2Page } from '../form2/form2';
import { Form3Page } from '../form3/form3';

@NgModule({
  declarations: [
    Form1Page,
  ],
  imports: [
    IonicPageModule.forChild(Form1Page),
  ],
  exports: [
    Form1Page
  ]
})
export class Form1PageModule {}
