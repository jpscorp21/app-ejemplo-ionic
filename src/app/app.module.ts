import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//MODULOS

import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';


// PAGINAS

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { Form1Page } from '../pages/form1/form1';

// SERVICIOS

//import { RestApiService } from '../services/rest-api.service';
import { DataService } from '../services/data.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    Form1Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FormsModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    Form1Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    //RestApiService,
    DataService
  ]
})
export class AppModule {}
