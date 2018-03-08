import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { MODULES, PROVIDERS, PAGES } from './app.imports';

@NgModule({
  declarations: [
    MyApp,
    PAGES
  ],
  imports: [
    MODULES,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PAGES
  ],
  providers: [
    PROVIDERS,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
