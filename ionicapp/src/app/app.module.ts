import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { SDKBrowserModule } from './shared/sdk/index';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DashboardPage } from '../pages/dashboard/dashboard';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import localeBrExtra from '@angular/common/locales/extra/br';


registerLocaleData(localePt, 'pt-BR', localeBrExtra);



import { LOCALE_ID } from '@angular/core';


@NgModule({
  declarations: [
    MyApp,
    DashboardPage
  ],
  imports: [
    BrowserModule,
    SDKBrowserModule.forRoot(),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DashboardPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    {
      provide: LOCALE_ID,
      useValue: "pt-BR"
    }
  ]
})
export class AppModule { }
