import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Modulo, ModuloApi } from './../../app/shared/sdk/index';
/**
 * Generated class for the ModuloListaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-modulo-lista',
  templateUrl: 'modulo-lista.html',
})
export class ModuloListaPage {

  public buscando: boolean = false;
  public termoBuscado: string = '';
  public lista: Modulo[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public API: ModuloApi) {
  }

  ionViewDidLoad() {
    // this.buscar();
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
      (data: Modulo[]) => {
        this.lista = data;

      }
    )
  }

  abrir(item: Modulo = null) {
    if (item)
      this.navCtrl.push('ModuloFormPage', { item: item });
    else
      this.navCtrl.push('ModuloFormPage');
  }

}
