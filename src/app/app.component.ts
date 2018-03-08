import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { WelcomePage } from '../pages/welcome/welcome';
import { ListaPaisesPage } from '../pages/lista-paises/lista-paises';
import { ListaAnimesPage } from '../pages/lista-animes/lista-animes';
import { PostsPage } from '../pages/posts/posts';
import { PopoverPage } from '../pages/popover/popover';


@Component({
  templateUrl: 'app.html'
})

export class MyApp {

  @ViewChild(Nav) nav: Nav;

  rootPage: any = WelcomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Inicio', component: HomePage },
      { title: 'Lista', component: ListPage },
      { title: 'Posts', component: PostsPage},
      { title: 'Paises', component: ListaPaisesPage },
      { title: 'Animes', component: ListaAnimesPage },
      { title: 'Popover', component: PopoverPage},
      { title: 'Salir', component: WelcomePage},
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  logout() {
    localStorage.clear();
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if (page.title == "Salir") {
      this.logout();
    }

    this.nav.setRoot(page.component);
  }
}
