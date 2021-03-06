import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Modulo, ModuloApi } from '../../app/shared/sdk';

@IonicPage()
@Component({
  selector: 'page-modulo-form',
  templateUrl: 'modulo-form.html',
})
export class ModuloFormPage {

  public dadosDoForm: Modulo = new Modulo();

  constructor(public navCtrl: NavController, public navParams: NavParams, public API: ModuloApi) {
    let item = navParams.get('item');
    if (item) this.dadosDoForm = Object.assign(new Modulo, item);
  }

  ionViewDidLoad() {

  }

  salvar() {

    try {
      if (!this.dadosDoForm.descricao) throw 'Informe uma descrição';

      this.API.upsert(this.dadosDoForm).subscribe(
        (retorno: Modulo) => {
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
