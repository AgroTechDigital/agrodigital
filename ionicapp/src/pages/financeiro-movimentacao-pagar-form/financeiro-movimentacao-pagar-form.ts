import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FinanceiroMovimentacao, FinanceiroMovimentacaoApi } from '../../app/shared/sdk';

@IonicPage()
@Component({
  selector: 'page-financeiro-movimentacao-pagar-form',
  templateUrl: 'financeiro-movimentacao-pagar-form.html',
})
export class FinanceiroMovimentacaoPagarFormPage {

  public dadosDoForm: FinanceiroMovimentacao = new FinanceiroMovimentacao();

  constructor(public navCtrl: NavController, 
      public navParams: NavParams,
      public API: FinanceiroMovimentacaoApi) {
    let item = navParams.get('item');
    if (item) this.dadosDoForm = Object.assign(new FinanceiroMovimentacao, item);
  }

  ionViewDidLoad() {
  }

  salvar() {

    try {
      if (!this.dadosDoForm.descricao) throw 'Informe uma descrição';

      this.dadosDoForm.debito = false;

      this.API.upsert(this.dadosDoForm).subscribe(
        (retorno: FinanceiroMovimentacao) => {
          this.navCtrl.pop();
        }
      )

    } catch (error) {
      alert(error);
    }
  }

  excluir() {

  }
}