//IONIC NATIVE
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';

//MODULOS
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

//SERVICES
import { RestApiService } from '../services/rest-api.service';
import { DataService } from '../services/data.service';
import { PaisesService } from '../services/paises/paises.service';
import { AnimesService } from '../services/animes/animes.service';
import { PostsService } from '../services/posts/posts.service';


export const MODULES = [
  BrowserModule,
  FormsModule,
  HttpClientModule
];

export const PROVIDERS = [
  //Servicios
  RestApiService,
  DataService,
  PaisesService,
  AnimesService,
  PostsService,

  //Ionic Native Providers
  Camera,
  StatusBar,
  SplashScreen

];
