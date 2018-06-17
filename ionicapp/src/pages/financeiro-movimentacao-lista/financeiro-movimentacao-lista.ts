import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FinanceiroMovimentacao, FinanceiroMovimentacaoApi, FinanceiroCategoria } from '../../app/shared/sdk';
import { locateHostElement } from '@angular/core/src/render3/instructions';

@IonicPage()
@Component({
  selector: 'page-financeiro-movimentacao-lista',
  templateUrl: 'financeiro-movimentacao-lista.html',
})
export class FinanceiroMovimentacaoListaPage {

  public buscando: boolean = false;
  public termoBuscado: string = '';
  public lista: FinanceiroMovimentacao[];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public API: FinanceiroMovimentacaoApi) {
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
      }, include: 'categoria'
    }).subscribe(
      (data: FinanceiroMovimentacao[]) => {
        this.lista = data;
      }
    )
  }

  abrir(entrada: boolean, item: FinanceiroMovimentacao = null) {
    if (entrada) { //receber
      this.navCtrl.push('FinanceiroMovimentacaoReceberFormPage', { item: item });
    }
    else { //pagar
      this.navCtrl.push('FinanceiroMovimentacaoPagarFormPage', { item: item });
    }

  }
}