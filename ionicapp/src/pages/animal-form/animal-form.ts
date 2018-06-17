import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Animal, AnimalApi, AnimalEventos, AnimalEventosApi } from '../../app/shared/sdk';

@IonicPage()
@Component({
  selector: 'page-animal-form',
  templateUrl: 'animal-form.html',
})
export class AnimalFormPage {

  public dadosDoForm: Animal = new Animal();
  public listaEventos: AnimalEventos[] = [];
  public animalSegment: string = 'informacoes';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public API: AnimalApi,
    public animalEventosApi: AnimalEventosApi,
    public modalCtrl: ModalController
  ) {
    let item = navParams.get('item');
    if (item) this.dadosDoForm = Object.assign(new Animal, item);

    if (!item) {
      this.dadosDoForm.raca = "nelore"
      this.dadosDoForm.tipo = "bovino";
      this.dadosDoForm.finalidade = "cria";
      this.dadosDoForm.status = "vivo";
      this.dadosDoForm.unidadeAnimal = 1;
      this.dadosDoForm.sexo = false;
      this.dadosDoForm.categoria = "remover";
    }
  }

  ionViewDidEnter() {
    this.buscarEventos();
  }

  buscarEventos() {
    this.animalEventosApi.find({ where: { animalId: this.dadosDoForm.id }, order: 'createdAt DESC' }).subscribe(
      (data: AnimalEventos[]) => {
        this.listaEventos = data;
      }
    )
  }

  abrirEvento(evento: AnimalEventos) {
    let modal = this.modalCtrl.create('AnimalEventosFormPage', { item: evento, callback: this.callbackEventos });
    modal.present();
  }

  novoEvento() {
    let modal = this.modalCtrl.create('AnimalEventosFormPage', { animal: this.dadosDoForm, callback: this.callbackEventos });
    modal.present();
  }

  salvar() {

    try {
      if (!this.dadosDoForm.tipo) throw 'Informe o tipo do animal';

      this.API.upsert(this.dadosDoForm).subscribe(
        (retorno: Animal) => {
          this.navCtrl.pop();
        }
      )

    } catch (error) {
      alert(error);
    }
  }

  excluir() {

  }

  callbackEventos = (_params) => {
    return new Promise((resolve, reject) => {
      this.buscarEventos();
      resolve();
    })
  }


}
