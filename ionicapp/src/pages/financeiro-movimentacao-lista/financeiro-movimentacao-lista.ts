import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FinanceiroMovimentacao, FinanceiroMovimentacaoApi } from '../../app/shared/sdk';

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
      }
    }).subscribe(
      (data: FinanceiroMovimentacao[]) => {
        this.lista = data;

      }
    )
  }

  abrir(item: FinanceiroMovimentacao = null, entrada: boolean) {
    
    if (item && entrada)
      this.navCtrl.push('FinanceiroMovimentacaoReceberFormPage', { item: item });      
    else if (!item && entrada)      
      this.navCtrl.push('FinanceiroMovimentacaoReceberFormPage');      
    else if (!item && !entrada)    
      this.navCtrl.push('FinanceiroMovimentacaoPagarFormPage', { item: item });        
    else       
      this.navCtrl.push('FinanceiroMovimentacaoPagarFormPage');
  }
}