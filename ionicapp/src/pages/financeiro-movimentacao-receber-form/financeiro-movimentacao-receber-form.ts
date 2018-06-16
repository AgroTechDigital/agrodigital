import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FinanceiroMovimentacaoReceberFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-financeiro-movimentacao-receber-form',
  templateUrl: 'financeiro-movimentacao-receber-form.html',
})
export class FinanceiroMovimentacaoReceberFormPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FinanceiroMovimentacaoReceberFormPage');
  }

}
