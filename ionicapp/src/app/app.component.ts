import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoopBackConfig } from './shared/sdk';
import { DashboardPage } from '../pages/dashboard/dashboard';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = DashboardPage;

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
    // LoopBackConfig.setBaseURL('http://192.168.1.101:3000');
    LoopBackConfig.setBaseURL('https://agrodigital.herokuapp.com');

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Dashboard', component: DashboardPage},
      { title: 'Animais', component: 'AnimalListaPage'},
      { title: 'Evento em Lote', component: 'AnimalEventoLoteFormPage'},
      { title: 'Módulos', component: 'ModuloListaPage'},
      { title: 'Piquetes', component: 'PiqueteListaPage' },
      { title: 'Manejo', component: 'ManejoFormPage'},
      { title: 'Categoria', component: 'FinanceiroCategoriaListaPage'},
      { title: 'Lançamento de contas', component: 'FinanceiroMovimentacaoListaPage'}
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

