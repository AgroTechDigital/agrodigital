import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Manejo, ManejoApi } from '../../app/shared/sdk';

@IonicPage()
@Component({
  selector: 'page-manejo-form',
  templateUrl: 'manejo-form.html',
})
export class ManejoFormPage {

  public dadosDoForm: Manejo = new Manejo();

  constructor(public navCtrl: NavController, public navParams: NavParams, public API: ManejoApi) {
    let item = navParams.get('item');
    if (item) this.dadosDoForm = Object.assign(new Manejo, item);
  }

  ionViewDidLoad() {

  }

  salvar() {

    try {
      //if (!this.dadosDoForm.descricao) throw 'Informe uma descrição';

      this.API.upsert(this.dadosDoForm).subscribe(
        (data: Manejo) => {
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
