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

//PAGES
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { Form1Page } from '../pages/form1/form1';
import { Form2Page } from '../pages/form2/form2';
import { Form3Page } from '../pages/form3/form3';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { ListaPaisesPage } from '../pages/lista-paises/lista-paises';
import { WelcomePage } from '../pages/welcome/welcome';
import { ListaAnimesPage } from '../pages/lista-animes/lista-animes';
import { PostsPage } from '../pages/posts/posts';
import { Form4Page } from '../pages/form4/form4';
import { PopoverPage } from '../pages/popover/popover';
import { PopoverMenuPage } from '../pages/popover-menu/popover-menu';
import { PostsDetailPage } from '../pages/posts-detail/posts-detail';
import { CreateAnimePage } from '../pages/create-anime/create-anime';


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

export const PAGES = [
  HomePage,
  WelcomePage,
  ListPage,
  LoginPage,
  SignupPage,
  ListaPaisesPage,
  ListaAnimesPage,
  CreateAnimePage,
  PostsPage,
  PostsDetailPage,
  PopoverPage,
  PopoverMenuPage,
  //Formularios
  Form1Page, Form2Page, Form3Page, Form4Page
]
