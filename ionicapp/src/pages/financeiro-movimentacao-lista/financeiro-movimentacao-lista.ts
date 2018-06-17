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

  public dadosDoForm: FinanceiroMovimentacao[] = [];
  public buscando: boolean = false;
  public termoBuscado: string = '';
  public lista: FinanceiroMovimentacao[];
  public totalReceber?: number;
  public totalPagar?: number;

  public ttlReceber: any = [];
  public ttlPagar: any = [];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public API: FinanceiroMovimentacaoApi) {

    let item = navParams.get('item');
    if (item) this.dadosDoForm = Object.assign(new FinanceiroMovimentacao, item);
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

        for (let i = 0; i < this.lista.length; i++) {
          if (this.lista[i].debito) {
            this.ttlReceber += this.lista[i].valor;
          }
          else {
            this.ttlPagar +=this.lista[i].valor;            

          }
        }
        
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