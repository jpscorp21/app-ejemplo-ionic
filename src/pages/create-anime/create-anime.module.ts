import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateAnimePage } from './create-anime';

@NgModule({
  declarations: [
    CreateAnimePage,
  ],
  imports: [
    IonicPageModule.forChild(CreateAnimePage),
  ],
  exports: [
    CreateAnimePage
  ]
})
export class CreateAnimePageModule {}
