import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FinanceiroMovimentacao, FinanceiroMovimentacaoApi, FinanceiroCategoriaApi, FinanceiroCategoria } from '../../app/shared/sdk';

@IonicPage()
@Component({
  selector: 'page-financeiro-movimentacao-pagar-form',
  templateUrl: 'financeiro-movimentacao-pagar-form.html',
})
export class FinanceiroMovimentacaoPagarFormPage {

  listaCategorias: FinanceiroCategoria[];
  public dadosDoForm: FinanceiroMovimentacao = new FinanceiroMovimentacao();

  constructor(public navCtrl: NavController, 
      public navParams: NavParams,
      public API: FinanceiroMovimentacaoApi,
      public categoriaApi: FinanceiroCategoriaApi) {
    let item = navParams.get('item');
    if (item) this.dadosDoForm = Object.assign(new FinanceiroMovimentacao, item);
  }

  ionViewDidLoad() {
    //Buscar Todos as Categorias
    this.categoriaApi.find().subscribe(
      (retorno: FinanceiroCategoria[]) => {
        this.listaCategorias = retorno;
      })
  }

  salvar() {

    try {
      if (!this.dadosDoForm.descricao) throw 'Informe uma descrição';

      this.dadosDoForm.debito = true;

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