import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
              private data: DataService) {

    this.paisesService.query()
    .then((data) => {
      this.paises = data;
      console.log(data);
    })
    .catch((error) => {
      this.data.error(error);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaPaisesPage');
  }
}
