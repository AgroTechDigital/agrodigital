import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Piquete, PiqueteApi } from '../../app/shared/sdk';

@IonicPage()
@Component({
  selector: 'page-piquete-lista',
  templateUrl: 'piquete-lista.html',
})
export class PiqueteListaPage {

  public buscando: boolean = false;
  public termoBuscado: string = '';
  public lista: Piquete[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public API: PiqueteApi) {
  }

  ionViewDidEnter() {
    this.buscar();
  }

  buscar() {

    this.API.find({
      where: {
        nome: { like: this.termoBuscado, options: 'i' }
      }, include: 'modulo'
    }).subscribe(
      (data: Piquete[]) => {
        this.lista = data;
 console.log(data);
 
      }
    )
  }

  abrir(item: Piquete = null) {
    if (item)
      this.navCtrl.push('PiqueteFormPage', { item: item });
    else
      this.navCtrl.push('PiqueteFormPage');
  }

}
