import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataService } from '../../services/data.service';
import { HomePage } from '../home/home';
import { RestApiService } from '../../services/rest-api.service';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  cuenta: { email: string, password: string } = {
    email: 'a@a.com',
    password: '1234'
  };

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private data: DataService,
    private api: RestApiService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


  async doLogin() {

    console.log(this.cuenta.email);
    console.log(this.cuenta.password);
    if (this.cuenta.email === "a@a.com" && this.cuenta.password === "1234") {
      //this.data.success('Los datos estan correctos');
      //Una forma para establecer un token
      /*const data = await this.api.post(
        'http://localhost:3030/api/accounts/login',
        this.cuenta
      );
      if (data['success']) {
        localStorage.setItem('token', data['token']);
        this.navCtrl.setRoot(HomePage);
      } else {
        this.data.error(data['message']);
      }*/
      this.navCtrl.setRoot(HomePage);

    } else {
      this.data.error('Los datos estan incorrectos');
    }
  }
}
