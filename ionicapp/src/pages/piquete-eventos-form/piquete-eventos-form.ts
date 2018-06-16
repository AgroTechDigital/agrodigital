import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PiqueteEventos, PiqueteEventosApi } from '../../app/shared/sdk';

@IonicPage()
@Component({
  selector: 'page-piquete-eventos-form',
  templateUrl: 'piquete-eventos-form.html',
})
export class PiqueteEventosFormPage {

  public dadosDoForm: PiqueteEventos = new PiqueteEventos();

  constructor(public navCtrl: NavController, public navParams: NavParams, public API: PiqueteEventosApi) {
    let item = navParams.get('item');
    if (item) this.dadosDoForm = Object.assign(new PiqueteEventos, item);
  }

  ionViewDidLoad() {

  }

  salvar() {

    try {
      if (!this.dadosDoForm.nome) throw 'Informe uma nome do evento';
      if (!this.dadosDoForm.tipo) throw 'Informe o tipo de evento';

      this.API.upsert(this.dadosDoForm).subscribe(
        (modulo: PiqueteEventos) => {
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
