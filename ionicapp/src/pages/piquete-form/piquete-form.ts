import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Piquete, PiqueteApi } from '../../app/shared/sdk';

@IonicPage()
@Component({
  selector: 'page-piquete-form',
  templateUrl: 'piquete-form.html',
})
export class PiqueteFormPage {

  public dadosDoForm: Piquete = new Piquete();

  constructor(public navCtrl: NavController, public navParams: NavParams, public API: PiqueteApi) {
    let item = navParams.get('item');
    if (item) this.dadosDoForm = Object.assign(new Piquete, item);
  }

  ionViewDidLoad() {

  }

  salvar() {

    try {
      //if (!this.dadosDoForm.nome) throw 'Informe uma descrição';

      this.API.upsert(this.dadosDoForm).subscribe(
        (modulo: Piquete) => {
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
