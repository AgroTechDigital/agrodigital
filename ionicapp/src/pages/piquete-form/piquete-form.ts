import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Piquete, PiqueteApi, Modulo, ModuloApi } from '../../app/shared/sdk';

@IonicPage()
@Component({
  selector: 'page-piquete-form',
  templateUrl: 'piquete-form.html',
})
export class PiqueteFormPage {

  public dadosDoForm: Piquete = new Piquete();
  public listaModulos: Modulo[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public API: PiqueteApi, public moduloApi: ModuloApi) {
    let item = navParams.get('item');
    if (item) this.dadosDoForm = Object.assign(new Piquete, item);
  }

  ionViewDidEnter() {
    this.moduloApi.find().subscribe(
      (modulos: Modulo[]) => {
        this.listaModulos = modulos;
      }
    )
  }

  salvar() {

    try {
      if (!this.dadosDoForm.nome) throw 'Informe um nome';
      if (!this.dadosDoForm.moduloId) throw 'Selecione algum módulo';

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
