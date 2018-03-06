import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { CreateAnimePage } from '../create-anime/create-anime';

/**
 * Generated class for the ListaAnimesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-animes',
  templateUrl: 'lista-animes.html',
})
export class ListaAnimesPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaAnimesPage');
  }

  addModal() {
    this.modalCtrl.create(CreateAnimePage).present();
  }

}
