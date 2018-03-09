import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { PostsService } from '../../services/posts/posts.service';
import { DataService } from '../../services/data.service';

@IonicPage()
@Component({
  selector: 'page-posts',
  templateUrl: 'posts.html',
})
export class PostsPage {

  posts: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public postService: PostsService,
              private data: DataService,
              public loadingCtrl: LoadingController) {

    this.showData();
  }

  showData() {
    let loading = this.loadingCtrl.create();

    loading.present();

    this.postService.query()
    .then((data) => {
      this.posts = data;
      loading.dismiss();
    })
    .catch((error) => {
      this.data.error(error.message);
      loading.dismiss();
    });

  }

}
