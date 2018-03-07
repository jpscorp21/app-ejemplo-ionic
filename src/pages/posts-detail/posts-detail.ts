import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-posts-detail',
  templateUrl: 'posts-detail.html',
})
export class PostsDetailPage {

  post: object;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.post = this.navParams.data;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostsDetailPage');
  }

}
