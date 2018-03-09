import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AnimesService } from '../../services/animes/animes.service';

@IonicPage()
@Component({
  selector: 'page-lista-animes',
  templateUrl: 'lista-animes.html',
})
export class ListaAnimesPage {

  animes: any = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl: ModalController,
              private animesService: AnimesService) {

     this.animes = this.animesService.query();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaAnimesPage');
  }

  addModal() {
    let addModal = this.modalCtrl.create('CreateAnimePage');

    addModal.onDidDismiss(anime => {

      if (anime) {
        //console.log(anime);
        this.animesService.add(anime);
      }

    })

    addModal.present();

  }

}
