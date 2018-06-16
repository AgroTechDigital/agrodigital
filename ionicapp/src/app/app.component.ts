import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoopBackConfig } from './shared/sdk';
import { PiqueteListaPage } from '../pages/piquete-lista/piquete-lista';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = PiqueteListaPage;

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
    LoopBackConfig.setBaseURL('http://192.168.1.20:3000');

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Animais', component: 'AnimalListaPage'},
      { title: 'Módulos', component: 'ModuloListaPage'},
      { title: 'Piquetes', component: PiqueteListaPage },
      { title: 'Manejo', component: 'ManejoFormPage'},
      // { title: 'Cliente', component: 'ClienteListaPage'},
      // { title: 'Compra', component: 'CompraListaPage'},
      // { title: 'Venda', component: 'VendaListaPage'},
      // { title: 'Fornecedor', component: 'FornecedorListaPage'},
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

