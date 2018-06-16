import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FinanceiroCategoria, FinanceiroCategoriaApi } from '../../app/shared/sdk';

@IonicPage()
@Component({
  selector: 'page-financeiro-categoria-form',
  templateUrl: 'financeiro-categoria-form.html',
})
export class FinanceiroCategoriaFormPage {

  public dadosDoForm: FinanceiroCategoria = new FinanceiroCategoria();

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public API: FinanceiroCategoriaApi) {
    let item = navParams.get('item');
    if (item) this.dadosDoForm = Object.assign(new FinanceiroCategoria, item);
  }

  ionViewDidLoad() {

  }

  salvar() {

    try {
      if (!this.dadosDoForm.descricao) throw 'Informe uma descrição';

      this.API.upsert(this.dadosDoForm).subscribe(
        (retorno: FinanceiroCategoria) => {
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
