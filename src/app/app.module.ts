import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from "@ionic/storage";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AddnotePage } from '../pages/addnote/addnote';
import { DetailsPage } from '../pages/details/details';
import { EditPage } from '../pages/edit/edit';
import { AddnoteProvider } from '../providers/addnote/addnote';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddnotePage,
    DetailsPage,
    EditPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddnotePage,
    DetailsPage,
    EditPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AddnoteProvider
  ]
})
export class AppModule {}
