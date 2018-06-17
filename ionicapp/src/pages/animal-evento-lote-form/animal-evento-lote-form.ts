import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AnimalEventos, AnimalRFIDApi, AnimalRFID } from '../../app/shared/sdk';

/**
 * Generated class for the AnimalEventoLoteFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-animal-evento-lote-form',
  templateUrl: 'animal-evento-lote-form.html',
})
export class AnimalEventoLoteFormPage {

  public dadosDoForm: AnimalEventos = new AnimalEventos();
  public tagManual: AnimalRFID = new AnimalRFID();
  public lista: AnimalRFID[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public rfidApi: AnimalRFIDApi,
  ) {
    this.dadosDoForm.tipo = "vacinacao";
    this.dadosDoForm.data = new Date();
    this.leitura();
  }

  leitura() {
    this.rfidApi.leitura().subscribe((data: AnimalRFID[]) => {
      console.log(data);
      data.forEach(i => {
        this.lista.push(i)
      });
      setTimeout(() => {
        this.leitura();
      }, 500);
    })
  }

  addManual() {
    this.lista.push(this.tagManual);
    this.tagManual = new AnimalRFID();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnimalEventoLoteFormPage');
  }

}
