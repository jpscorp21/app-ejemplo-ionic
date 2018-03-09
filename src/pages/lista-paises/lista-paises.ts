import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { PaisesService } from '../../services/paises/paises.service';
import { DataService } from '../../services/data.service';

@IonicPage()
@Component({
  selector: 'page-lista-paises',
  templateUrl: 'lista-paises.html',
})
export class ListaPaisesPage {

  paises: any = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private paisesService: PaisesService,
              private data: DataService,
              public loadingCtrl: LoadingController) {

    this.showData();

  }

  showData() {
    let loading = this.loadingCtrl.create();
    loading.present();

    this.paisesService.query()
    .then((data) => {
      this.paises = data;
      loading.dismiss();
    })
    .catch((error) => {
      this.data.error(error.message);
      loading.dismiss();
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaPaisesPage');
  }
}
