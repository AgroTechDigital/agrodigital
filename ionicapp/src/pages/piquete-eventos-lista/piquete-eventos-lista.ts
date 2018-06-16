import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PiqueteEventos, PiqueteEventosApi } from '../../app/shared/sdk';

@IonicPage()
@Component({
  selector: 'page-piquete-eventos-lista',
  templateUrl: 'piquete-eventos-lista.html',
})
export class PiqueteEventosListaPage {

  public buscando: boolean = false;
  public termoBuscado: string = '';
  public lista: PiqueteEventos[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public API: PiqueteEventosApi) {
  }

  ionViewDidEnter() {
    this.buscar();
  }

  buscar() {

    this.API.find({
      where: {
        descricao: { like: this.termoBuscado, options: 'i' }
      }
    }).subscribe(
      (data: PiqueteEventos[]) => {
        this.lista = data;

      }
    )
  }

  abrir(item: PiqueteEventos = null) {
    if (item)
      this.navCtrl.push('PiqueteEventosFormPage', { item: item });
    else
      this.navCtrl.push('PiqueteEventosFormPage');
  }

}
