import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataService } from '../../services/data.service';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  cuenta: {email: string, password: string} = {
    email:'',
    password: ''
  };

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private data: DataService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  doLogin(){
    console.log(this.cuenta.email);
    console.log(this.cuenta.password);
    if (this.cuenta.email === "a@a.com" && this.cuenta.password === "1234") {
      this.data.success('Los datos estan correctos');
      this.navCtrl.setRoot(HomePage);
    } else {
      this.data.error('Los datos estan incorrectos');
    }
  }
}
