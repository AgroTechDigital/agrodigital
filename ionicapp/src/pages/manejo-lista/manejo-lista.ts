import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Manejo, ManejoApi } from '../../app/shared/sdk';

@IonicPage()
@Component({
  selector: 'page-manejo-lista',
  templateUrl: 'manejo-lista.html',
})
export class ManejoListaPage {

  public buscando: boolean = false;
  public termoBuscado: string = '';
  public lista: Manejo[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public API: ManejoApi) {
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
      (data: Manejo[]) => {
        this.lista = data;

      }
    )
  }

  abrir(item: Manejo = null) {
    if (item)
      this.navCtrl.push('ManejoFormPage', { item: item });
    else
      this.navCtrl.push('ManejoFormPage');
  }

}
