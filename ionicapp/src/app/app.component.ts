import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { ModuloListaPage } from '../pages/modulo-lista/modulo-lista';
import { LoopBackConfig } from './shared/sdk';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  //rootPage:any = TabsPage;
  rootPage: any = ModuloListaPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    // LoopBackConfig.setBaseURL('http://127.0.0.1:3000');
    LoopBackConfig.setBaseURL('http://192.168.1.137:3000');
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
