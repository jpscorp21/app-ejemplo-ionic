import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaPaisesPage } from './lista-paises';

@NgModule({
  declarations: [
    ListaPaisesPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaPaisesPage),
  ],
  exports: [
    ListaPaisesPage
  ]
})
export class ListaPaisesPageModule {}
