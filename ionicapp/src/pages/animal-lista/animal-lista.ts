import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Animal, AnimalApi } from '../../app/shared/sdk';

@IonicPage()
@Component({
  selector: 'page-animal-lista',
  templateUrl: 'animal-lista.html',
})
export class AnimalListaPage {

  public buscando: boolean = false;
  public termoBuscado: string = '';
  public lista: Animal[];

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public API: AnimalApi) {
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
        etiqueta: { like: this.termoBuscado, options: 'i' }
      }
    }).subscribe(
      (retorno: Animal[]) => {
        this.lista = retorno;
      }
    )
  }

  abrir(item: Animal = null) {
    if (item)
      this.navCtrl.push('AnimalFormPage', { item: item });
    else
      this.navCtrl.push('AnimalFormPage');
  }
}
