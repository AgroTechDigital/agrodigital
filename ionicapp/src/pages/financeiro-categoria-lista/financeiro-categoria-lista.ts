import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FinanceiroCategoria, FinanceiroCategoriaApi } from '../../app/shared/sdk';

@IonicPage()
@Component({
  selector: 'page-financeiro-categoria-lista',
  templateUrl: 'financeiro-categoria-lista.html',
})
export class FinanceiroCategoriaListaPage {

  public buscando: boolean = false;
  public termoBuscado: string = '';
  public lista: FinanceiroCategoria[];

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
      public API: FinanceiroCategoriaApi) {
  }

  ionViewDidLoad() {
    // this.buscar();
  }

  ionViewDidEnter() {
    this.buscar();
  }

  buscar() {

    this.API.find({
      where: {
        descricao: { like: this.termoBuscado, options: 'i' }
      }
    }).subscribe(
      (data: FinanceiroCategoria[]) => {
        this.lista = data;

      }
    )
  }

  abrir(item: FinanceiroCategoria = null) {
    if (item)
      this.navCtrl.push('FinanceiroCategoriaFormPage', { item: item });
    else
      this.navCtrl.push('FinanceiroCategoriaFormPage');
  }
}