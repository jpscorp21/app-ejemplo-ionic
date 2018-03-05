import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule, Storage } from '@ionic/storage';

//MODULOS

import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// PAGINAS

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { Form1Page } from '../pages/form1/form1';
import { Form2Page } from '../pages/form2/form2';
import { Form3Page } from '../pages/form3/form3';
import { LoginPage } from '../pages/login/login';
import { SignupPage} from '../pages/signup/signup';
import { ListaPaisesPage } from '../pages/lista-paises/lista-paises';
import { WelcomePage } from '../pages/welcome/welcome';
// SERVICIOS

import { RestApiService } from '../services/rest-api.service';
import { DataService } from '../services/data.service';
import { PaisesService } from '../services/paises/paises.service';




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    WelcomePage,
    ListPage,
    LoginPage,
    SignupPage,
    ListaPaisesPage,
    //Formularios
    Form1Page, Form2Page, Form3Page
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    FormsModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    WelcomePage,
    ListPage,
    LoginPage,
    SignupPage,
    ListaPaisesPage,
    //Formularios
    Form1Page, Form2Page, Form3Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PaisesService,
    RestApiService,
    DataService
  ]
})
export class AppModule {}
